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

const ALLOWED_COLLECTIONS = ['catalog', 'collections', 'hero_slides', 'orders'];

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
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
                if (record && record.data) {
                    return res.status(200).json({ data: record.data });
                }
            } else {
                const store = getFallbackStore();
                if (store[collection]) {
                    return res.status(200).json({ data: store[collection] });
                }
            }
        } catch (err) {
            console.error(`Store GET error [${collection}]:`, err);
        }
        // Nothing stored yet — client will use its defaults
        return res.status(200).json({ data: null });
    }

    // ── POST — admin write ───────────────────────────────────────────────────
    if (req.method === 'POST') {
        // Orders can also be written by authenticated customers (for new order placement)
        // All other writes require admin role
        const authHeader = req.headers.authorization || '';
        if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization required.' });
        }
        let decoded;
        try {
            decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
        } catch {
            return res.status(401).json({ error: 'Invalid or expired token.' });
        }

        const isAdmin = decoded.role === 'admin';
        // Only orders can be written by non-admins (customers placing orders)
        if (!isAdmin && collection !== 'orders') {
            return res.status(403).json({ error: 'Admin access required.' });
        }

        const { data } = req.body || {};
        if (data === undefined) {
            return res.status(400).json({ error: 'data field required.' });
        }

        try {
            const db = await connectToDatabase();
            if (db) {
                const col = db.collection('store_data');
                await col.updateOne(
                    { _id: collection },
                    { $set: { data, updatedAt: new Date(), updatedBy: decoded.email || decoded.userId } },
                    { upsert: true }
                );
            } else {
                const store = getFallbackStore();
                store[collection] = data;
                saveFallbackStore(store);
            }
            return res.status(200).json({ message: `${collection} saved.` });
        } catch (err) {
            console.error(`Store POST error [${collection}]:`, err);
            return res.status(500).json({ error: `Failed to save ${collection}.` });
        }
    }

    return res.status(405).json({ error: 'Method not allowed.' });
};
