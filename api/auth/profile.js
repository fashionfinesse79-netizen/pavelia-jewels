const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { connectToDatabase } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'pavelia_luxury_jwt_key_est_2026';

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed. Use GET.' });
    }

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization token required.' });
        }

        const token = authHeader.split(' ')[1];

        // Verify the secure token
        let decoded;
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch (jwtErr) {
            return res.status(401).json({ error: 'Session token has expired or is invalid.' });
        }

        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Retrieve user by ID
        const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });

        if (!user) {
            return res.status(404).json({ error: 'User profile not found.' });
        }

        return res.status(200).json({
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Profile fetch error:', error);
        return res.status(500).json({ error: 'Internal server error occurred while retrieving profile.' });
    }
};
