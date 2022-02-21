const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();

const createProduct = async (product) => {
  const data = product.data.object;
  console.log(product);
  await prisma.products.create({
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
      package_dimensions: data.package_dimensions || {},
      shippable: data.shippable,
      statement_descriptor: data.statement_descriptor,
      unit_label: data.unit_label,
      updated: data.updated,
      url: data.url,
      prices: data.prices,
    },
  });
  return { message: 'product.created', code: 200 };
};

const updateProduct = async (product) => {
  const data = product.data.object;
  await prisma.products.update({
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
      package_dimensions: data.package_dimensions || {},
      shippable: data.shippable,
      statement_descriptor: data.statement_descriptor,
      unit_label: data.unit_label,
      updated: data.updated,
      url: data.url,
    },
  });
  return { message: 'product.updated', code: 200 };
};
const deleteProduct = async (product) => {
  const data = product.data.object;
  await prisma.products.update({
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
      package_dimensions: data.package_dimensions || {},
      shippable: data.shippable,
      statement_descriptor: data.statement_descriptor,
      unit_label: data.unit_label,
      updated: data.updated,
      url: data.url,
    },
  });
  return { message: 'product.updated', code: 200 };
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
};
