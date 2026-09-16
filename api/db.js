const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

let cachedClient = null;
let cachedDb = null;

// Resilient fallback storage path in /tmp (writable in serverless and local environments)
const VAULT_CACHE_PATH = path.join('/tmp', 'pavelia_vault_cache.json');

function getFallbackStore() {
    try {
        if (fs.existsSync(VAULT_CACHE_PATH)) {
            const data = fs.readFileSync(VAULT_CACHE_PATH, 'utf8');
            return JSON.parse(data);
        }
    } catch (e) {
        // Fallback to fresh object
    }
    return { users: [], carts: {} };
}

function saveFallbackStore(data) {
    try {
        fs.writeFileSync(VAULT_CACHE_PATH, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        // Ignore if file system is temporarily read-only
    }
}

async function connectToDatabase() {
    // Return cached connection if still alive
    if (cachedClient && cachedDb) {
        try {
            // Ping to verify connection is still live
            await cachedDb.command({ ping: 1 });
            return cachedDb;
        } catch (_) {
            // Connection dropped — reset and reconnect
            cachedClient = null;
            cachedDb = null;
        }
    }

    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('Pavelia DB: MONGODB_URI is not set. Check Vercel environment variables.');
        return null;
    }

    try {
        const client = new MongoClient(uri, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
            socketTimeoutMS: 10000,
            maxPoolSize: 10,
            retryWrites: true,
            w: 'majority'
        });

        await client.connect();
        const db = client.db('pavelia_jewels');

        // Verify connection works
        await db.command({ ping: 1 });

        cachedClient = client;
        cachedDb = db;
        console.log('Pavelia DB: Connected to MongoDB Atlas successfully.');
        return db;
    } catch (err) {
        console.error('Pavelia DB: MongoDB connection failed:', err.message);
        cachedClient = null;
        cachedDb = null;
        return null;
    }
}

module.exports = {
    connectToDatabase,
    getFallbackStore,
    saveFallbackStore
};
