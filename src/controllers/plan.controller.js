const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();

const createPlan = async (plan) => {
  const data = plan.data.object;
  await prisma.plans.create({
    data: {
      id: data.id,
      object: data.object,
      name: data.name,
      tiers: data.tiers,
      active: data.active,
      amount: data.amount,
      created: data.created,
      product: data.product,
      updated: data.updated,
      currency: data.currency,
      interval: data.interval,
      livemode: data.livemode,
      metadata: data.metadata || {},
      nickname: data.nickname,
      tiers_mode: data.tiers_mode,
      usage_type: data.usage_type,
      billing_scheme: data.billing_scheme,
      interval_count: data.interval_count,
      aggregate_usage: data.aggregate_usage,
      transform_usage: data.transform_usage,
      trial_period_days: data.trial_period_days,
      statement_descriptor: data.statement_descriptor,
      statement_description: data.statement_description,
    },
  });
  return { message: 'plan.created', code: 200 };
};
const updatePlan = async (plan) => {
  const data = plan.data.object;
  await prisma.plans.update({
    where: {
      id: data.id,
    },
    data: {
      id: data.id,
      object: data.object,
      name: data.name,
      tiers: data.tiers,
      active: data.active,
      amount: data.amount,
      created: data.created,
      product: data.product,
      updated: data.updated,
      currency: data.currency,
      interval: data.interval,
      livemode: data.livemode,
      metadata: data.metadata || {},
      nickname: data.nickname,
      tiers_mode: data.tiers_mode,
      usage_type: data.usage_type,
      billing_scheme: data.billing_scheme,
      interval_count: data.interval_count,
      aggregate_usage: data.aggregate_usage,
      transform_usage: data.transform_usage,
      trial_period_days: data.trial_period_days,
      statement_descriptor: data.statement_descriptor,
      statement_description: data.statement_description,
    },
  });
  return { message: 'plan.created', code: 200 };
};
const softDeletePlan = async (plan) => {
  const data = plan.data.object;
  await prisma.plans.update({
    where: {
      id: data.id,
    },
    data: {
      id: data.id,
      object: data.object,
      name: data.name,
      tiers: data.tiers,
      active: data.active,
      amount: data.amount,
      created: data.created,
      product: data.product,
      updated: data.updated,
      currency: data.currency,
      interval: data.interval,
      livemode: data.livemode,
      metadata: data.metadata || {},
      nickname: data.nickname,
      tiers_mode: data.tiers_mode,
      usage_type: data.usage_type,
      billing_scheme: data.billing_scheme,
      interval_count: data.interval_count,
      aggregate_usage: data.aggregate_usage,
      transform_usage: data.transform_usage,
      trial_period_days: data.trial_period_days,
      statement_descriptor: data.statement_descriptor,
      statement_description: data.statement_description,
    },
  });
  return { message: 'plan.created', code: 200 };
};
module.exports = {
  createPlan,
  updatePlan,
  softDeletePlan,
};
