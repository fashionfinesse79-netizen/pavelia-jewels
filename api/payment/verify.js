/**
 * POST /api/payment/verify
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 * Verifies the payment signature and saves the paid order.
 */
const { verifyPaymentSignature, finalizePaidOrder } = require('../_razorpay');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};
    if (!verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
        return res.status(400).json({ error: 'Payment verification failed.' });
    }

    try {
        const order = await finalizePaidOrder(razorpay_order_id, razorpay_payment_id);
        return res.status(200).json({ order });
    } catch (err) {
        console.error('verify error:', err.message);
        return res.status(500).json({ error: 'Payment received but order could not be saved. Please contact us with your payment ID: ' + razorpay_payment_id });
    }
};
