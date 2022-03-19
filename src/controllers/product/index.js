const Prisma = require('@prisma/client');
const { logger } = require('../../utils/logger');

const prisma = new Prisma.PrismaClient();

const productController = async (product) => {
  switch (product.type) {
    case 'product.created': {
      return productCreated(product);
    }
    case 'product.deleted': {
      return productDeleted(product);
    }
    case 'product.updated': {
      return productUpdated(product);
    }
    default:
      logger.log(`Unknown product Event type : ${product.type}`);
      return undefined;
  }
};

const productCreated = async (product) => {
  const data = product.data.object;
  try {
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
    logger.log('product created');

    return { message: 'succsess', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};

/**
 * Updates the product with the given product ID.
 * @param product - The product to update.
 * @returns None
 */
const productUpdated = async (product) => {
  const data = product.data.object;
  try {
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
    logger.log('product updated');

    return { message: 'succsess', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};

/**
 * Deletes the given product from the database.
 * @param product - The product to delete.
 * @returns None
 */
const productDeleted = async (product) => {
  const data = product.data.object;
  try {
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
    logger.log(`product deleted`);

    return { message: 'succsess', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};

module.exports = {
  productController,
};
