const Prisma = require('@prisma/client');

const prisma = new Prisma.PrismaClient();

const createCustomer = async (customer) => {
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
  return { message: 'customer.created', code: 200 };
};
const updateCustomer = async (customer) => {
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
  return { message: 'customer.created', code: 200 };
};

module.exports = {
  createCustomer,
  updateCustomer,
};
