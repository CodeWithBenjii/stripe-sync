/* eslint-disable no-lone-blocks */
const express = require('express');

const router = express.Router();
const stripe = require('stripe');
const { customerController } = require('../controllers/customer');
const { invoiceController } = require('../controllers/invoice');
const { productController } = require('../controllers/product');
const { priceController } = require('../controllers/price');
const { planController } = require('../controllers/plan');

const { logger } = require('../utils/logger');

const endpointSecret = 'whsec_5af6c39753451a11c2721890a4236a23725f3796c7880f95e5313bce8a7f2eed';

router.post('/webhook', express.raw({ type: 'application/json' }), async (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type.startsWith('customer.')) {
    const data = await customerController(event);
  }
  if (event.type.startsWith('invoice.')) {
    const data = await invoiceController(event);
  }
  if (event.type.startsWith('product.')) {
    const data = await productController(event);
  }
  if (event.type.startsWith('plan.')) {
    const data = await planController(event);
  }
  if (event.type.startsWith('price.')) {
    const data = await priceController(event);
  }
  if (event.type.startsWith('order.')) {
    logger.log('order');
  }

  response.send();
});

module.exports = router;
