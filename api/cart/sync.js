const jwt = require('jsonwebtoken');
const { connectToDatabase } = require('../db');

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

        // Verify session
        let decoded;
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch (jwtErr) {
            return res.status(401).json({ error: 'Session token has expired or is invalid.' });
        }

        const db = await connectToDatabase();
        const cartsCollection = db.collection('carts');
        const userId = decoded.userId;

        if (req.method === 'POST') {
            // Save user cart to MongoDB Atlas
            const { items } = req.body;
            await cartsCollection.updateOne(
                { userId },
                { $set: { items: items || [], updatedAt: new Date() } },
                { upsert: true }
            );
            return res.status(200).json({ message: 'Cart synchronized successfully.' });
        } else {
            // Load user cart from MongoDB Atlas
            const cartRecord = await cartsCollection.findOne({ userId });
            return res.status(200).json({ items: cartRecord ? cartRecord.items : [] });
        }

    } catch (error) {
        console.error('Cart sync error:', error);
        return res.status(500).json({ error: 'Internal server error occurred during cart sync.' });
    }
};
