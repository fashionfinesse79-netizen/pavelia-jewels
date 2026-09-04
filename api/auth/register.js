const bcrypt = require('bcryptjs');
const { connectToDatabase, getFallbackStore, saveFallbackStore } = require('../db');

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
        const { email, password, firstName, lastName } = req.body || {};

        if (!email || !password || !firstName) {
            return res.status(400).json({ error: 'Please provide your first name, email, and password.' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
        }

        const normalizedEmail = email.toLowerCase().trim();
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = {
            id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            email: normalizedEmail,
            passwordHash,
            firstName: firstName.trim(),
            lastName: (lastName || '').trim(),
            createdAt: new Date().toISOString()
        };

        const db = await connectToDatabase();
        if (db) {
            try {
                const usersCollection = db.collection('users');
                const existingUser = await usersCollection.findOne({ email: normalizedEmail });
                if (existingUser) {
                    return res.status(400).json({ error: 'An account with this email already exists.' });
                }
                await usersCollection.insertOne(newUser);
            } catch (dbErr) {
                console.warn('DB insert error, falling back to local vault:', dbErr.message);
                const store = getFallbackStore();
                if (store.users.some(u => u.email === normalizedEmail)) {
                    return res.status(400).json({ error: 'An account with this email already exists.' });
                }
                store.users.push(newUser);
                saveFallbackStore(store);
            }
        } else {
            const store = getFallbackStore();
            if (store.users.some(u => u.email === normalizedEmail)) {
                return res.status(400).json({ error: 'An account with this email already exists.' });
            }
            store.users.push(newUser);
            saveFallbackStore(store);
        }

        return res.status(201).json({
            message: 'Account created successfully. Welcome to Pavelia Jewels!',
            user: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ error: 'Registration failed. Please try again.' });
    }
};
