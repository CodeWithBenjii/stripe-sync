const Prisma = require('@prisma/client');
const { logger } = require('../../utils/logger');

const prisma = new Prisma.PrismaClient();

const priceCreated = async (price) => {
  const data = price.data.object;
  try {
    await prisma.prices.create({
      data: {
        id: data.id,
        object: data.object,
        active: data.active,
        currency: data.currency,
        metadata: data.metadata || {},
        nickname: data.nickname,
        recurring: data.recurring || {},
        type: data.type,
        unit_amount: data.unit_amount,
        billing_scheme: data.billing_scheme,
        created: data.created,
        livemode: data.livemode,
        lookup_key: data.lookup_key,
        tiers_mode: data.tiers_mode,
        transform_quantity: data.transform_quantity || undefined,
        unit_amount_decimal: data.unit_amount_decimal,
        product: data.product,
      },
    });
    logger.log('Created price');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};

const priceDeleted = async (price) => {
  const data = price.data.object;
  try {
    await prisma.prices.update({
      where: {
        id: data.id,
      },
      data: {
        id: data.id,
        object: data.object,
        active: data.active,
        currency: data.currency,
        metadata: data.metadata || {},
        nickname: data.nickname,
        recurring: data.recurring || {},
        type: data.type,
        unit_amount: data.unit_amount,
        billing_scheme: data.billing_scheme,
        created: data.created,
        livemode: data.livemode,
        lookup_key: data.lookup_key,
        tiers_mode: data.tiers_mode,
        transform_quantity: data.transform_quantity || undefined,
        unit_amount_decimal: data.unit_amount_decimal,
        product: data.product,
      },
    });
    logger.log('deleted price');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};

const priceUpdated = async (price) => {
  const data = price.data.object;
  try {
    await prisma.prices.update({
      where: {
        id: data.id,
      },
      data: {
        id: data.id,
        object: data.object,
        active: data.active,
        currency: data.currency,
        metadata: data.metadata || {},
        nickname: data.nickname,
        recurring: data.recurring || {},
        type: data.type,
        unit_amount: data.unit_amount,
        billing_scheme: data.billing_scheme,
        created: data.created,
        livemode: data.livemode,
        lookup_key: data.lookup_key,
        tiers_mode: data.tiers_mode,
        transform_quantity: data.transform_quantity || undefined,
        unit_amount_decimal: data.unit_amount_decimal,
        product: data.product,
      },
    });
    logger.log('Deleted Price');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};

const priceController = async (price) => {
  switch (price.type) {
    case 'price.created': {
      return priceCreated(price);
    }
    case 'price.deleted': {
      return priceDeleted(price);
    }
    case 'price.updated': {
      return priceUpdated(price);
    }
    default:
      logger.log(`Unknown price Event type : ${price.type}`);
      return undefined;
  }
};
module.exports = {
  priceController,
};
