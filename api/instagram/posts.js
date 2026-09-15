const jwt = require('jsonwebtoken');
const { connectToDatabase, getFallbackStore, saveFallbackStore } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'pavelia_luxury_jwt_key_est_2026';

const DEFAULT_POSTS = [
    {
        id: 'pvl-ig-1',
        caption: 'Royal Solitaire Band in 925 Sterling Silver — handcrafted for quiet luxury.',
        link: 'https://www.instagram.com/paveliajewels/',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=700&auto=format&fit=crop',
        active: true, order: 0
    },
    {
        id: 'pvl-ig-2',
        caption: 'Orion Diamond Studs — celestial sparkle meets lapidary artistry.',
        link: 'https://www.instagram.com/paveliajewels/',
        image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=700&auto=format&fit=crop',
        active: true, order: 1
    },
    {
        id: 'pvl-ig-3',
        caption: 'Riviera Tennis Bracelet — a timeless arc of brilliance.',
        link: 'https://www.instagram.com/paveliajewels/',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=700&auto=format&fit=crop',
        active: true, order: 2
    },
    {
        id: 'pvl-ig-4',
        caption: 'Bespoke choker commission — sculpted in precious sterling silver.',
        link: 'https://www.instagram.com/paveliajewels/',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=700&auto=format&fit=crop',
        active: true, order: 3
    },
    {
        id: 'pvl-ig-5',
        caption: 'Cascading diamond ear drops — understated opulence, redefined.',
        link: 'https://www.instagram.com/paveliajewels/',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=700&auto=format&fit=crop',
        active: true, order: 4
    },
    {
        id: 'pvl-ig-6',
        caption: 'Statement cocktail ring — born from the atelier, worn for eternity.',
        link: 'https://www.instagram.com/paveliajewels/',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=700&auto=format&fit=crop',
        active: true, order: 5
    }
];

const MASTER_ADMIN_KEY = process.env.ADMIN_KEY || 'pavelia_luxury_admin_2026';

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') return res.status(200).end();

    // ── GET — public, returns all posts ──────────────────────────────────────
    if (req.method === 'GET') {
        try {
            const db = await connectToDatabase();
            if (db) {
                const col = db.collection('instagram_posts');
                const record = await col.findOne({ _id: 'gallery' });
                if (record && Array.isArray(record.posts)) {
                    return res.status(200).json({ posts: record.posts });
                }
            } else {
                // Fallback store
                const store = getFallbackStore();
                if (store.instagram_posts && Array.isArray(store.instagram_posts)) {
                    return res.status(200).json({ posts: store.instagram_posts });
                }
            }
        } catch (err) {
            console.error('Instagram GET error:', err);
        }
        // If nothing stored yet return defaults
        return res.status(200).json({ posts: DEFAULT_POSTS });
    }

    // ── POST — admin-only, saves full posts array ─────────────────────────────
    if (req.method === 'POST') {
        const adminKeyHeader = req.headers['x-admin-key'] || '';
        const authHeader = req.headers.authorization || '';
        const { posts, adminKey } = req.body || {};

        let authorized = false;

        // 1. Direct admin key check
        if (adminKeyHeader === MASTER_ADMIN_KEY || adminKey === MASTER_ADMIN_KEY) {
            authorized = true;
        }

        // 2. Admin JWT check
        if (!authorized && authHeader.startsWith('Bearer ')) {
            try {
                const decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
                if (decoded && (decoded.role === 'admin' || decoded.email === 'admin@pavelia.com')) {
                    authorized = true;
                }
            } catch {}
        }

        if (!authorized) {
            return res.status(403).json({ error: 'Admin access required.' });
        }

        if (!Array.isArray(posts)) {
            return res.status(400).json({ error: 'posts array required.' });
        }

        try {
            const db = await connectToDatabase();
            if (db) {
                const col = db.collection('instagram_posts');
                await col.updateOne(
                    { _id: 'gallery' },
                    { $set: { posts, updatedAt: new Date() } },
                    { upsert: true }
                );
            } else {
                const store = getFallbackStore();
                store.instagram_posts = posts;
                saveFallbackStore(store);
            }
            return res.status(200).json({ message: 'Instagram gallery saved.', count: posts.length });
        } catch (err) {
            console.error('Instagram POST error:', err);
            return res.status(500).json({ error: 'Failed to save Instagram posts.' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed.' });
};
