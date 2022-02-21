const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();

const createSub = async (subscription) => {
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
const updateSub = async (subscription) => {
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
const deleteSub = async (subscription) => {
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

module.exports = {
  createSub,
  updateSub,
  deleteSub,
};
