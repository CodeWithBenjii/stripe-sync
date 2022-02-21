/* eslint-disable no-lone-blocks */
const express = require('express');

const router = express.Router();
const stripe = require('stripe');
const { createCustomer, updateCustomer } = require('../controllers');

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

  // Handle the event
  console.log(event);
  switch (event.type) {
    case 'customer.created': {
      const res = await createCustomer(event);
      if (res.code === 200) {
        console.log('✅ Customer Created!');
      }
      break;
    }
    case 'customer.updated': {
      const res = await updateCustomer(event);
      if (res.code === 200) {
        console.log('✅ Customer Updated!');
      }
      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.deleted': // Soft delete using `status = canceled`
    case 'customer.subscription.updated':
    case 'invoice.created':
    case 'invoice.finalized':
    case 'invoice.paid':
    case 'invoice.payment_failed':
    case 'invoice.payment_succeeded':
    case 'invoice.updated':
    case 'product.created':
    case 'product.updated':
    case 'product.deleted':
    case 'price.created':
    case 'price.updated':
    case 'price.deleted':
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

module.exports = router;
