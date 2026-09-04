const jwt = require('jsonwebtoken');
const { connectToDatabase, getFallbackStore, saveFallbackStore } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'pavelia_luxury_jwt_key_est_2026';

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET' && req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use GET or POST.' });
    }

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization token required.' });
        }

        const token = authHeader.split(' ')[1];

        let decoded;
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch (jwtErr) {
            return res.status(401).json({ error: 'Session token has expired or is invalid.' });
        }

        const userId = decoded.userId || decoded.email;
        const db = await connectToDatabase();

        if (req.method === 'POST') {
            const { items } = req.body || {};
            const cartItems = Array.isArray(items) ? items : [];

            if (db) {
                try {
                    const cartsCollection = db.collection('carts');
                    await cartsCollection.updateOne(
                        { userId },
                        { $set: { items: cartItems, updatedAt: new Date() } },
                        { upsert: true }
                    );
                } catch (dbErr) {
                    console.warn('DB cart save error, using fallback store:', dbErr.message);
                    const store = getFallbackStore();
                    store.carts[userId] = cartItems;
                    saveFallbackStore(store);
                }
            } else {
                const store = getFallbackStore();
                store.carts[userId] = cartItems;
                saveFallbackStore(store);
            }

            return res.status(200).json({ message: 'Cart synchronized successfully.' });
        } else {
            if (db) {
                try {
                    const cartsCollection = db.collection('carts');
                    const cartRecord = await cartsCollection.findOne({ userId });
                    return res.status(200).json({ items: cartRecord ? cartRecord.items : [] });
                } catch (dbErr) {
                    console.warn('DB cart load error, using fallback store:', dbErr.message);
                }
            }

            const store = getFallbackStore();
            const items = store.carts[userId] || [];
            return res.status(200).json({ items });
        }

    } catch (error) {
        console.error('Cart sync error:', error);
        return res.status(500).json({ error: 'Internal server error occurred during cart sync.' });
    }
};
