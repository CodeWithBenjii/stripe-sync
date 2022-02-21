const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();

const createPlan = async (plan) => {
  const data = plan.data.object;
  await prisma.plans.create({
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
const updatePlan = async (plan) => {
  const data = plan.data.object;
  await prisma.plans.update({
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
const softDeletePlan = async (plan) => {
  const data = plan.data.object;
  await prisma.plans.update({
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
  createPlan,
  updatePlan,
  softDeletePlan,
};
