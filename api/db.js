const { MongoClient } = require('mongodb');

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('Please define the MONGODB_URI environment variable inside Vercel settings.');
    }

    const client = await MongoClient.connect(uri);
    // Use or create the pavelia_jewels database
    const db = client.db('pavelia_jewels');
    cachedDb = db;
    return db;
}

module.exports = { connectToDatabase };
