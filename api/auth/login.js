const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectToDatabase, getFallbackStore } = require('../db');

// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET || 'pavelia_luxury_jwt_key_est_2026';

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    try {
        const { email, password } = req.body || {};

        if (!email || !password) {
            return res.status(400).json({ error: 'Please enter both your email and password.' });
        }

        const normalizedEmail = email.toLowerCase().trim();
        let user = null;

        const db = await connectToDatabase();
        if (db) {
            try {
                const usersCollection = db.collection('users');
                user = await usersCollection.findOne({ email: normalizedEmail });
            } catch (dbErr) {
                console.warn('DB find error, checking fallback store:', dbErr.message);
            }
        }

        if (!user) {
            const store = getFallbackStore();
            user = store.users.find(u => u.email === normalizedEmail);
        }

        if (!user) {
            return res.status(400).json({ error: 'No account found with this email address.' });
        }

        // Compare password securely
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ error: 'Incorrect password. Please verify your credentials.' });
        }

        const userId = user._id ? user._id.toString() : (user.id || user.email);

        // Sign token with user info for instant profile retrieval
        const token = jwt.sign(
            {
                userId,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName || ''
            },
            JWT_SECRET,
            { expiresIn: '30d' }
        );

        return res.status(200).json({
            message: 'Signed in successfully.',
            token,
            user: {
                firstName: user.firstName,
                lastName: user.lastName || '',
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Authentication failed. Please try again.' });
    }
};
