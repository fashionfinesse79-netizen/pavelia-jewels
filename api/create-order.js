/**
 * Alias route: POST /api/create-order
 * Forwards to /api/payment/create-order handler
 */
module.exports = require('./payment/create-order');
