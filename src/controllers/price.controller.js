const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();

const createPrice = async (price) => {
  console.log(price);
  const data = price.data.object;
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
  return { message: 'price.created', code: 200 };
};
const softDeletePrice = async (price) => {
  const data = price.data.object;
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
  return { message: 'plan.created', code: 200 };
};

const updatePrice = async (price) => {
  const data = price.data.object;
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
  return { message: 'plan.created', code: 200 };
};

module.exports = {
  createPrice,
  softDeletePrice,
  updatePrice,
};
