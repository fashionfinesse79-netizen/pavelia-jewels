const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { connectToDatabase, getFallbackStore } = require('../db');

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

        // If decoded token already has user details, return immediately for optimal speed
        if (decoded && decoded.email && decoded.firstName) {
            return res.status(200).json({
                user: {
                    firstName: decoded.firstName,
                    lastName: decoded.lastName || '',
                    email: decoded.email,
                    role: decoded.role || (decoded.email === 'admin@pavelia.com' ? 'admin' : 'customer')
                }
            });
        }

        const db = await connectToDatabase();
        if (db && ObjectId.isValid(decoded.userId)) {
            const usersCollection = db.collection('users');
            const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });
            if (user) {
                return res.status(200).json({
                    user: {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    }
                });
            }
        }

        const store = getFallbackStore();
        const fallbackUser = store.users.find(u => u.email === decoded.email || u.id === decoded.userId);
        if (fallbackUser) {
            return res.status(200).json({
                user: {
                    firstName: fallbackUser.firstName,
                    lastName: fallbackUser.lastName,
                    email: fallbackUser.email
                }
            });
        }

        return res.status(200).json({
            user: {
                firstName: 'Connoisseur',
                lastName: '',
                email: decoded.email || 'client@pavelia.com'
            }
        });

    } catch (error) {
        console.error('Profile fetch error:', error);
        return res.status(500).json({ error: 'Internal server error occurred while retrieving profile.' });
    }
};
