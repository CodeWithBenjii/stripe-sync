/* eslint-disable no-lone-blocks */
const express = require('express');

const router = express.Router();
const stripe = require('stripe');
const {
  createCustomer,
  updateCustomer,
  softDeleteCustomer,
  createProduct,
  updateProduct,
  deleteProduct,
  createPlan,
  updatePlan,
  softDeletePlan,
  createPrice,
  softDeletePrice,
  updatePrice,
  createSub,
  updateSub,
  deleteSub,
} = require('../controllers');

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
    case 'customer.deleted': {
      const res = await softDeleteCustomer(event);
      if (res.code === 200) {
        console.log('✅ Customer Soft Deleted!');
      }
      break;
    }
    case 'product.created': {
      const res = await createProduct(event);
      if (res.code === 200) {
        console.log('✅ Product Created!');
      }
      break;
    }
    case 'product.updated': {
      const res = await updateProduct(event);
      if (res.code === 200) {
        console.log('✅ Product Updated!');
      }
      break;
    }
    case 'product.deleted': {
      const res = await deleteProduct(event);
      if (res.code === 200) {
        console.log('✅ Product Deleted!');
      }
      break;
    }
    case 'plan.created': {
      const res = await createPlan(event);
      if (res.code === 200) {
        console.log('✅ Plan Created!');
      }
      break;
    }
    case 'plan.updated': {
      const res = await updatePlan(event);
      if (res.code === 200) {
        console.log('✅ Plan updated!');
      }
      break;
    }
    case 'plan.deleted': {
      const res = await softDeletePlan(event);
      if (res.code === 200) {
        console.log('✅ Plan updated!');
      }
      break;
    }
    case 'price.created': {
      const res = await createPrice(event);
      if (res.code === 200) {
        console.log('✅ Price Created!');
      }
      break;
    }
    case 'price.updated': {
      const res = await updatePrice(event);
      if (res.code === 200) {
        console.log('✅ Price updated!');
      }
      break;
    }
    case 'price.deleted': {
      const res = await softDeletePrice(event);
      if (res.code === 200) {
        console.log('✅ Price deleted!');
      }
      break;
    }
    case 'customer.subscription.created': {
      const res = await createSub(event);
      if (res.code === 200) {
        console.log('✅ Subscription Created!');
      }
      break;
    }
    case 'customer.subscription.deleted': {
      const res = await deleteSub(event);
      if (res.code === 200) {
        console.log('✅ Subscription deleted!');
      }
      break;
    }
    case 'customer.subscription.updated': {
      const res = await updateSub(event);
      if (res.code === 200) {
        console.log('✅ Subscription updated!');
      }
      break;
    }
    case 'invoice.created':
    case 'invoice.finalized':
    case 'invoice.paid':
    case 'invoice.payment_failed':
    case 'invoice.payment_succeeded':
    case 'invoice.updated':
    default:
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

module.exports = router;
