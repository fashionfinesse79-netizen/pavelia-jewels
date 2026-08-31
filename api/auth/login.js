const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectToDatabase } = require('../db');

// JWT Secret Key - falls back to a default locally, but should be set in Vercel settings
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
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Please enter both email and password.' });
        }

        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Locate user in MongoDB
        const normalizedEmail = email.toLowerCase().trim();
        const user = await usersCollection.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Compare password hash
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Create secure JSON Web Token
        const token = jwt.sign(
            { userId: user._id.toString(), email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' } // Token valid for 7 days
        );

        return res.status(200).json({
            message: 'Login successful.',
            token,
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error occurred during login.' });
    }
};
