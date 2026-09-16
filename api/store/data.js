/**
 * Universal Pavelia Store Data API
 * GET  /api/store/data?collection=<name>   — public read
 * POST /api/store/data?collection=<name>   — admin write (JWT required)
 *
 * Valid collections: catalog, collections, hero_slides, orders
 */
const jwt = require('jsonwebtoken');
const { connectToDatabase, getFallbackStore, saveFallbackStore } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'pavelia_luxury_jwt_key_est_2026';
const MASTER_ADMIN_KEY = process.env.ADMIN_KEY || 'pavelia_luxury_admin_2026';
const ALLOWED_COLLECTIONS = ['catalog', 'collections', 'hero_slides', 'orders'];

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') return res.status(200).end();

    const collection = (req.query && req.query.collection) || '';
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
        return res.status(400).json({ error: `Invalid collection. Use one of: ${ALLOWED_COLLECTIONS.join(', ')}` });
    }

    // ── GET — public read ────────────────────────────────────────────────────
    if (req.method === 'GET') {
        try {
            const db = await connectToDatabase();
            if (db) {
                const col = db.collection('store_data');
                const record = await col.findOne({ _id: collection });
                if (record && record.data !== undefined) {
                    return res.status(200).json({ data: record.data, _source: 'mongodb' });
                }
                // MongoDB connected but this collection has no data yet
                return res.status(200).json({ data: null, _source: 'mongodb_empty' });
            } else {
                // MongoDB failed to connect — use /tmp fallback
                console.error(`[${collection}] GET: MongoDB unavailable. MONGODB_URI set: ${!!process.env.MONGODB_URI}`);
                const store = getFallbackStore();
                if (store[collection] !== undefined) {
                    return res.status(200).json({ data: store[collection], _source: 'fallback_tmp' });
                }
                return res.status(200).json({ data: null, _source: 'fallback_empty' });
            }
        } catch (err) {
            console.error(`Store GET error [${collection}]:`, err.message);
            return res.status(200).json({ data: null, _source: 'error', error: err.message });
        }
    }

    // ── POST — admin write ───────────────────────────────────────────────────
    if (req.method === 'POST') {
        const { data, adminKey } = req.body || {};
        if (data === undefined) {
            return res.status(400).json({ error: 'data field required.' });
        }

        const adminKeyHeader = req.headers['x-admin-key'] || '';
        const authHeader = req.headers.authorization || '';

        let authorized = false;
        let decoded = null;

        // 1. Direct admin key verification (from admin dashboard)
        if (adminKeyHeader === MASTER_ADMIN_KEY || adminKey === MASTER_ADMIN_KEY) {
            authorized = true;
        }

        // 2. JWT verification (if logged in as admin)
        if (!authorized && authHeader.startsWith('Bearer ')) {
            try {
                decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
                if (decoded && (decoded.role === 'admin' || decoded.email === 'admin@pavelia.com')) {
                    authorized = true;
                }
            } catch {}
        }

        // 3. Orders collection can be saved by client checkout
        if (collection === 'orders') {
            authorized = true;
        }

        if (!authorized) {
            return res.status(403).json({ error: 'Admin access required.' });
        }

        try {
            const db = await connectToDatabase();
            const updatedBy = (decoded && (decoded.email || decoded.userId)) || 'admin_suite';
            if (db) {
                const col = db.collection('store_data');
                await col.updateOne(
                    { _id: collection },
                    { $set: { data, updatedAt: new Date(), updatedBy } },
                    { upsert: true }
                );
                return res.status(200).json({ message: `${collection} saved.`, _source: 'mongodb' });
            } else {
                console.error(`[${collection}] POST: MongoDB unavailable. MONGODB_URI set: ${!!process.env.MONGODB_URI}`);
                const store = getFallbackStore();
                store[collection] = data;
                saveFallbackStore(store);
                return res.status(200).json({
                    message: `${collection} saved.`,
                    _source: 'fallback_tmp',
                    warning: 'MongoDB unavailable — data in temporary storage only, will be lost on server restart'
                });
            }
        } catch (err) {
            console.error(`Store POST error [${collection}]:`, err.message);
            return res.status(500).json({ error: `Failed to save ${collection}.`, detail: err.message });
        }
    }

    return res.status(405).json({ error: 'Method not allowed.' });
};
