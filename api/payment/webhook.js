/**
 * POST /api/payment/webhook
 * Safety net: if a customer pays but closes the tab before /verify runs,
 * Razorpay calls this endpoint and the order is still saved.
 * Needs RAZORPAY_WEBHOOK_SECRET and the "payment.captured" event enabled.
 */
const crypto = require('crypto');
const { finalizePaidOrder } = require('../_razorpay');

function readRawBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', c => chunks.push(c));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
    });
}

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end();

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) return res.status(503).json({ error: 'Webhook not configured.' });

    const raw = await readRawBody(req);
    const signature = req.headers['x-razorpay-signature'] || '';
    const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex');
    const a = Buffer.from(expected);
    const b = Buffer.from(String(signature));
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
        return res.status(400).json({ error: 'Invalid signature.' });
    }

    try {
        const event = JSON.parse(raw.toString('utf8'));
        if (event.event === 'payment.captured' || event.event === 'order.paid') {
            const payment = event.payload && event.payload.payment && event.payload.payment.entity;
            if (payment && payment.order_id && payment.id) {
                await finalizePaidOrder(payment.order_id, payment.id);
            }
        }
        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('webhook error:', err.message);
        return res.status(500).json({ error: 'Webhook processing failed.' });
    }
};

// Razorpay signs the raw body, so Vercel must not pre-parse it.
module.exports.config = { api: { bodyParser: false } };
