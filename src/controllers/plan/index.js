const Prisma = require('@prisma/client');
const { logger } = require('../../utils/logger');

const prisma = new Prisma.PrismaClient();

/**
 * Create a new plan in the database.
 * @param {Plan} plan - The plan to create.
 * @returns None
 */
const planCreated = async (plan) => {
  const data = plan.data.object;
  try {
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
    logger.log('Created plan');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};
/**
 * Update a plan in the database.
 * @param {Plan} plan - the plan to update
 * @returns {Promise<Plan>}
 */
const planUpdated = async (plan) => {
  const data = plan.data.object;
  try {
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
    logger.log('updated plan');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};
/**
 * Takes in a plan object and updates the plan in the database.
 * @param {Plan} plan - the plan object to update
 * @returns {Promise<Plan>} - the updated plan object
 */
const planDeleted = async (plan) => {
  const data = plan.data.object;
  try {
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
    logger.log('deleted plan');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};
/**
 * Handles the plan event type and dispatched to the correct Event Controller.
 * @param {Plan} plan - the plan object
 * @returns None
 */
const planController = async (plan) => {
  switch (plan.type) {
    case 'plan.created': {
      return planCreated(plan);
    }
    case 'plan.deleted': {
      return planDeleted(plan);
    }
    case 'plan.updated': {
      return planUpdated(plan);
    }
    default:
      logger.log(`Unknown plan Event type : ${plan.type}`);
      return undefined;
  }
};
module.exports = {
  planController,
};
