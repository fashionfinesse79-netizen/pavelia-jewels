/**
 * Shared Razorpay helpers (files prefixed with "_" are not exposed as Vercel routes).
 * Required environment variables:
 *   RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, (optional) RAZORPAY_WEBHOOK_SECRET
 */
const crypto = require('crypto');
const { connectToDatabase } = require('./db');

function getKeys() {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) return null;
    return { keyId, keySecret };
}

async function razorpayRequest(method, path, body) {
    const keys = getKeys();
    if (!keys) throw new Error('Razorpay keys are not configured on the server.');
    const auth = Buffer.from(`${keys.keyId}:${keys.keySecret}`).toString('base64');
    const resp = await fetch(`https://api.razorpay.com/v1${path}`, {
        method,
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
    });
    const json = await resp.json().catch(() => ({}));
    if (!resp.ok) {
        const msg = (json && json.error && json.error.description) || `Razorpay HTTP ${resp.status}`;
        throw new Error(msg);
    }
    return json;
}

function verifyPaymentSignature(orderId, paymentId, signature) {
    const keys = getKeys();
    if (!keys || !orderId || !paymentId || !signature) return false;
    const expected = crypto
        .createHmac('sha256', keys.keySecret)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');
    const a = Buffer.from(expected);
    const b = Buffer.from(String(signature));
    return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function generateOrderId() {
    return `PVL-${new Date().getFullYear()}-${crypto.randomInt(10000, 100000)}`;
}

/**
 * Turns a verified payment into a stored order. Idempotent: calling it twice
 * for the same Razorpay payment (verify endpoint + webhook) saves only one order.
 */
async function finalizePaidOrder(razorpayOrderId, paymentId) {
    const db = await connectToDatabase();
    if (!db) throw new Error('Database unavailable.');

    const pendingCol = db.collection('pending_payments');
    const pending = await pendingCol.findOne({ _id: razorpayOrderId });
    if (!pending) throw new Error('Unknown payment order.');

    if (pending.finalOrder) return pending.finalOrder; // already saved

    // Re-confirm with Razorpay that this payment is captured for the right amount.
    const payment = await razorpayRequest('GET', `/payments/${encodeURIComponent(paymentId)}`);
    if (payment.order_id !== razorpayOrderId) throw new Error('Payment does not belong to this order.');
    if (payment.amount !== pending.amountPaise) throw new Error('Paid amount does not match order amount.');
    if (!['captured', 'authorized'].includes(payment.status)) throw new Error(`Payment not completed (${payment.status}).`);

    const now = new Date();
    const order = {
        orderId: generateOrderId(),
        orderDate: now.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }),
        timestamp: now.toISOString(),
        items: pending.items,
        total: pending.amountPaise / 100,
        paymentMethod: 'Online Payment (Encrypted Razorpay Vault - UPI/Card)',
        paymentStatus: 'PAID',
        paymentId,
        razorpayOrderId,
        address: pending.address,
        status: 'Confirmed • In Bespoke Atelier Preparation'
    };

    // Claim the pending record atomically so concurrent calls can't double-save.
    const claim = await pendingCol.findOneAndUpdate(
        { _id: razorpayOrderId, finalOrder: { $exists: false } },
        { $set: { finalOrder: order, paymentId, paidAt: now } }
    );
    if (!claim) {
        const again = await pendingCol.findOne({ _id: razorpayOrderId });
        return again.finalOrder;
    }

    const storeCol = db.collection('store_data');
    const record = await storeCol.findOne({ _id: 'orders' });
    const existing = record && Array.isArray(record.data) ? record.data : [];
    await storeCol.updateOne(
        { _id: 'orders' },
        { $set: { data: [order, ...existing], updatedAt: now, updatedBy: 'razorpay' } },
        { upsert: true }
    );
    return order;
}

module.exports = {
    getKeys,
    razorpayRequest,
    verifyPaymentSignature,
    finalizePaidOrder
};
