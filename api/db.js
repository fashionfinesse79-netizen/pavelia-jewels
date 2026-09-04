const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

let cachedDb = null;
let mongoFailed = false;

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
    if (cachedDb) return cachedDb;
    if (mongoFailed) return null;

    const uri = process.env.MONGODB_URI;
    if (!uri) {
        mongoFailed = true;
        return null;
    }

    try {
        const client = new MongoClient(uri, {
            serverSelectionTimeoutMS: 2500,
            connectTimeoutMS: 2500,
            maxPoolSize: 5,
            tls: true,
            tlsAllowInvalidCertificates: true
        });

        await client.connect();
        const db = client.db('pavelia_jewels');
        cachedDb = db;
        return db;
    } catch (err) {
        console.warn('Notice: Remote MongoDB connection deferred. Operating with Atelier resilient vault.');
        mongoFailed = true;
        return null;
    }
}

module.exports = {
    connectToDatabase,
    getFallbackStore,
    saveFallbackStore
};
