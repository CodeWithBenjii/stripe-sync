const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();
const { logger } = require('../../utils/logger');

const customerCreated = async (customer) => {
  try {
    const data = customer.data.object;
    await prisma.customers.create({
      data: {
        id: data.id,
        object: data.object,
        address: data.address || {},
        balance: data.balance,
        created: data.created,
        currency: data.currency,
        default_source: data.default_source,
        delinquent: data.delinquent,
        description: data.description,
        discount: data.discount || {},
        email: data.email,
        invoice_prefix: data.email,
        invoice_settings: data.invoice_settings,
        livemode: data.livemode,
        metadata: data.metadata || {},
        name: data.name,
        next_invoice_sequence: data.next_invoice_sequence,
        phone: data.phone,
        preferred_locales: data.preferred_locales,
        shipping: data.shipping || {},
        tax_exempt: data.tax_exempt,
      },
    });
    logger.log('Created customer');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};
const customerUpdated = async (customer) => {
  try {
    const data = customer.data.object;

    await prisma.customers.update({
      where: {
        id: data.id,
      },
      data: {
        id: data.id,
        object: data.object,
        address: data.address || {},
        balance: data.balance,
        created: data.created,
        currency: data.currency,
        default_source: data.default_source,
        delinquent: data.delinquent,
        description: data.description,
        discount: data.discount || {},
        email: data.email,
        invoice_prefix: data.email,
        invoice_settings: data.invoice_settings,
        livemode: data.livemode,
        metadata: data.metadata || {},
        name: data.name,
        next_invoice_sequence: data.next_invoice_sequence,
        phone: data.phone,
        preferred_locales: data.preferred_locales,
        shipping: data.shipping || {},
        tax_exempt: data.tax_exempt,
      },
    });
    logger.log('Created updated');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};
const customerDeleted = async (customer) => {
  try {
    const data = customer.data.object;
    await prisma.customers.update({
      where: {
        id: data.id,
      },
      data: {
        deleted: true,
      },
    });
    logger.log('Created deleted');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};
const customerSubscriptionCreated = async (subscription) => {
  const data = subscription.data.object;
  await prisma.subscriptions.create({
    data: {
      id: data.id,
      object: data.object,
      cancel_at_period_end: data.cancel_at_period_end,
      current_period_end: data.current_period_end,
      current_period_start: data.current_period_start,
      default_payment_method: data.default_payment_method,
      items: data.items,
      metadata: data.metadata,
      pending_setup_intent: data.pending_setup_intent || undefined,
      pending_update: data.pending_update || undefined,
      status: data.status,
      application_fee_percent: data.application_fee_percent,
      billing_cycle_anchor: data.billing_cycle_anchor,
      billing_thresholds: data.billing_thresholds || undefined,
      cancel_at: data.cancel_at,
      canceled_at: data.canceled_at,
      collection_method: data.collection_method,
      created: data.created,
      days_until_due: data.days_until_due,
      default_source: data.default_source,
      default_tax_rates: data.default_tax_rates,
      discount: data.discount || undefined,
      ended_at: data.ended_at,
      livemode: data.livemode,
      next_pending_invoice_item_invoice: data.next_pending_invoice_item_invoice,
      pause_collection: data.pause_collection || undefined,
      pending_invoice_item_interval: data.pending_invoice_item_interval || undefined,
      start_date: data.start_date,
      transfer_data: data.transfer_data || undefined,
      trial_end: data.trial_end || undefined,
      trial_start: data.trial_start || undefined,
      schedule: data.schedule,
      customer: data.customer,
      latest_invoice: data.latest_invoice,
      plan: data.plan.id || undefined,
    },
  });
  return { message: 'subscription.created', code: 200 };
};
const customerSubscriptionDeleted = async (subscription) => {
  const data = subscription.data.object;
  await prisma.subscriptions.update({
    where: {
      id: data.id,
    },
    data: {
      id: data.id,
      object: data.object,
      cancel_at_period_end: data.cancel_at_period_end,
      current_period_end: data.current_period_end,
      current_period_start: data.current_period_start,
      default_payment_method: data.default_payment_method,
      items: data.items,
      metadata: data.metadata,
      pending_setup_intent: data.pending_setup_intent || undefined,
      pending_update: data.pending_update || undefined,
      status: data.status,
      application_fee_percent: data.application_fee_percent,
      billing_cycle_anchor: data.billing_cycle_anchor,
      billing_thresholds: data.billing_thresholds || undefined,
      cancel_at: data.cancel_at,
      canceled_at: data.canceled_at,
      collection_method: data.collection_method,
      created: data.created,
      days_until_due: data.days_until_due,
      default_source: data.default_source,
      default_tax_rates: data.default_tax_rates,
      discount: data.discount || undefined,
      ended_at: data.ended_at,
      livemode: data.livemode,
      next_pending_invoice_item_invoice: data.next_pending_invoice_item_invoice,
      pause_collection: data.pause_collection || undefined,
      pending_invoice_item_interval: data.pending_invoice_item_interval || undefined,
      start_date: data.start_date,
      transfer_data: data.transfer_data || undefined,
      trial_end: data.trial_end || undefined,
      trial_start: data.trial_start || undefined,
      schedule: data.schedule,
      customer: data.customer,
      latest_invoice: data.latest_invoice,
      plan: data.plan.id || undefined,
    },
  });
  return { message: 'subscription.updated', code: 200 };
};
const customerSubscriptionUpdated = async (subscription) => {
  const data = subscription.data.object;
  await prisma.subscriptions.update({
    where: {
      id: data.id,
    },
    data: {
      id: data.id,
      object: data.object,
      cancel_at_period_end: data.cancel_at_period_end,
      current_period_end: data.current_period_end,
      current_period_start: data.current_period_start,
      default_payment_method: data.default_payment_method,
      items: data.items,
      metadata: data.metadata,
      pending_setup_intent: data.pending_setup_intent || undefined,
      pending_update: data.pending_update || undefined,
      status: data.status,
      application_fee_percent: data.application_fee_percent,
      billing_cycle_anchor: data.billing_cycle_anchor,
      billing_thresholds: data.billing_thresholds || undefined,
      cancel_at: data.cancel_at,
      canceled_at: data.canceled_at,
      collection_method: data.collection_method,
      created: data.created,
      days_until_due: data.days_until_due,
      default_source: data.default_source,
      default_tax_rates: data.default_tax_rates,
      discount: data.discount || undefined,
      ended_at: data.ended_at,
      livemode: data.livemode,
      next_pending_invoice_item_invoice: data.next_pending_invoice_item_invoice,
      pause_collection: data.pause_collection || undefined,
      pending_invoice_item_interval: data.pending_invoice_item_interval || undefined,
      start_date: data.start_date,
      transfer_data: data.transfer_data || undefined,
      trial_end: data.trial_end || undefined,
      trial_start: data.trial_start || undefined,
      schedule: data.schedule,
      customer: data.customer,
      latest_invoice: data.latest_invoice,
      plan: data.plan.id || undefined,
    },
  });
  return { message: 'subscription.deleted', code: 200 };
};

const customerController = async (customer) => {
  switch (customer.type) {
    case 'customer.created':
      return customerCreated(customer);
    case 'customer.updated':
      return customerUpdated(customer);
    case 'customer.deleted':
      return customerDeleted(customer);
    case 'customer.subscription.created':
      return customerSubscriptionCreated(customer);
    case 'customer.subscription.deleted':
      return customerSubscriptionDeleted(customer);
    case 'customer.subscription.updated':
      return customerSubscriptionUpdated(customer);
    case 'customer.source.created': {
      logger.log(customer.type);
      return { message: 'Not implemented yet', code: 100 };
    }
    case 'customer.source.deleted': {
      logger.log(customer.type);
      return { message: 'Not implemented yet', code: 100 };
    }
    case 'customer.source.expiring': {
      logger.log(customer.type);
      return { message: 'Not implemented yet', code: 100 };
    }
    case 'customer.source.updated': {
      logger.log(customer.type);
      return { message: 'Not implemented yet', code: 100 };
    }
    default:
      logger.log(`Unknown Customer Event type : ${customer.type}`);
      return { message: 'Not implemented yet', code: 200 };
  }
};
module.exports = { customerController };
