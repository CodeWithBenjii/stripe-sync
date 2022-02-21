const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();

const createPrice = async (price) => {
  const data = price.data.object;
  await prisma.prices.create({
    data: {
      id: data.id,
      object: data.object,
      active: data.active,
      created: data.created,
      description: data.description,
      images: data.images,
      livemode: data.livemode,
      metadata: data.metadata || {},
      name: data.name,
      shippable: data.shippable,
      statement_descriptor: data.statement_descriptor,
      unit_label: data.unit_label,
      updated: data.updated,
      url: data.url,
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
      created: data.created,
      description: data.description,
      images: data.images,
      livemode: data.livemode,
      metadata: data.metadata || {},
      name: data.name,
      shippable: data.shippable,
      statement_descriptor: data.statement_descriptor,
      unit_label: data.unit_label,
      updated: data.updated,
      url: data.url,
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
      created: data.created,
      description: data.description,
      images: data.images,
      livemode: data.livemode,
      metadata: data.metadata || {},
      name: data.name,
      shippable: data.shippable,
      statement_descriptor: data.statement_descriptor,
      unit_label: data.unit_label,
      updated: data.updated,
      url: data.url,
    },
  });
  return { message: 'plan.created', code: 200 };
};

module.exports = {
  createPrice,
  softDeletePrice,
  updatePrice,
};
