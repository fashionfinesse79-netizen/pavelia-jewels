require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, './')));

// Import Serverless Handlers
const registerHandler = require('./api/auth/register');
const loginHandler = require('./api/auth/login');
const profileHandler = require('./api/auth/profile');
const syncCartHandler = require('./api/cart/sync');

// Vercel execution environment simulator
const vercelWrapper = (handler) => {
    return async (req, res) => {
        try {
            await handler(req, res);
        } catch (err) {
            console.error('Serverless simulation error:', err);
            res.status(500).json({ error: 'Serverless simulator execution error.' });
        }
    };
};

app.post('/api/auth/register', vercelWrapper(registerHandler));
app.post('/api/auth/login', vercelWrapper(loginHandler));
app.get('/api/auth/profile', vercelWrapper(profileHandler));
app.get('/api/cart/sync', vercelWrapper(syncCartHandler));
app.post('/api/cart/sync', vercelWrapper(syncCartHandler));



const PORT = 8080;
app.listen(PORT, () => {
    console.log(`\n=============================================================`);
    console.log(`PAVELIA JEWELS - Full-Stack Local Server Active`);
    console.log(`Localhost link: http://localhost:${PORT}`);
    console.log(`Connecting to Cloud MongoDB Atlas: Active`);
    console.log(`=============================================================\n`);
});
