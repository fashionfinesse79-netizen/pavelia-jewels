const bcrypt = require('bcryptjs');
const { connectToDatabase } = require('../db');

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
        const { email, password, firstName, lastName } = req.body;

        if (!email || !password || !firstName) {
            return res.status(400).json({ error: 'Missing email, password, or first name.' });
        }

        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Check if user already exists
        const normalizedEmail = email.toLowerCase().trim();
        const existingUser = await usersCollection.findOne({ email: normalizedEmail });

        if (existingUser) {
            return res.status(400).json({ error: 'An account with this email already exists.' });
        }

        // Hash the password securely
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Insert new user
        const newUser = {
            email: normalizedEmail,
            passwordHash,
            firstName: firstName.trim(),
            lastName: (lastName || '').trim(),
            createdAt: new Date()
        };

        await usersCollection.insertOne(newUser);

        return res.status(201).json({ message: 'Account created successfully. You can now log in.' });

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ error: 'Internal server error occurred during registration.' });
    }
};
