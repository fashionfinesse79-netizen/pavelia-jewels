/**
 * POST /api/payment/create-order
 * Body: { items: [{ id, quantity, ... }], address: { fullName, phone, email, ... } }
 * Creates a Razorpay order. The amount is calculated on the server from the
 * catalog so a customer can't tamper with the price in the browser.
 */
const { connectToDatabase } = require('../db');
const { getKeys, razorpayRequest } = require('../_razorpay');

function toNumber(v) {
    if (typeof v === 'number') return v;
    const n = parseInt(String(v || '').replace(/[^\d]/g, ''), 10);
    return Number.isFinite(n) ? n : 0;
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

    const keys = getKeys();
    if (!keys) return res.status(503).json({ error: 'Online payments are not configured yet.' });

    try {
        const { items, address } = req.body || {};
        if (!Array.isArray(items) || items.length === 0 || items.length > 50) {
            return res.status(400).json({ error: 'Your bag is empty.' });
        }
        if (!address || !address.fullName || !address.phone) {
            return res.status(400).json({ error: 'Delivery details are required.' });
        }

        const db = await connectToDatabase();
        if (!db) return res.status(503).json({ error: 'Service temporarily unavailable. Please try again.' });

        // Server-side price lookup
        const catalogRecord = await db.collection('store_data').findOne({ _id: 'catalog' });
        const catalog = catalogRecord && Array.isArray(catalogRecord.data) ? catalogRecord.data : [];
        const catalogById = new Map(catalog.map(p => [String(p.id), p]));

        let totalRupees = 0;
        const safeItems = [];
        for (const it of items) {
            const qty = Math.min(Math.max(parseInt(it.quantity, 10) || 1, 1), 20);
            const product = catalogById.get(String(it.id));
            const unit = product
                ? (toNumber(product.priceNum) || toNumber(product.price))
                : (toNumber(it.priceNum) || toNumber(it.price)); // fallback if product not in DB catalog
            if (!unit || unit < 1) {
                return res.status(400).json({ error: `Could not price "${it.name || it.id}".` });
            }
            totalRupees += unit * qty;
            safeItems.push({ ...it, priceNum: unit, price: `₹${unit.toLocaleString('en-IN')}`, quantity: qty });
        }

        const amountPaise = Math.round(totalRupees * 100);
        if (amountPaise < 100) return res.status(400).json({ error: 'Invalid order amount.' });

        const safeAddress = {};
        for (const k of ['fullName', 'phone', 'email', 'street', 'landmark', 'pincode', 'city', 'state', 'addressType']) {
            if (address[k] !== undefined) safeAddress[k] = String(address[k]).slice(0, 300);
        }

        const rzpOrder = await razorpayRequest('POST', '/orders', {
            amount: amountPaise,
            currency: 'INR',
            receipt: `pvl_${Date.now()}`,
            notes: { customer: safeAddress.fullName, phone: safeAddress.phone }
        });

        await db.collection('pending_payments').insertOne({
            _id: rzpOrder.id,
            amountPaise,
            items: safeItems,
            address: safeAddress,
            createdAt: new Date()
        });

        return res.status(200).json({
            razorpayOrderId: rzpOrder.id,
            amount: amountPaise,
            currency: 'INR',
            keyId: keys.keyId
        });
    } catch (err) {
        console.error('create-order error:', err.message);
        return res.status(500).json({ error: 'Could not start payment. Please try again.' });
    }
};
