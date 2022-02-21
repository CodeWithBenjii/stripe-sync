const { createCustomer, updateCustomer, softDeleteCustomer } = require('./customer.model');
const { createProduct, updateProduct, deleteProduct } = require('./product.controller');
const { createPlan, updatePlan, softDeletePlan } = require('./plan.controller');
const { createPrice, softDeletePrice, updatePrice } = require('./price.controller');
const { invoiceCreated } = require('./invoice.controller');
const { createSub, updateSub, deleteSub } = require('./subscription.controller');

module.exports = {
  createCustomer,
  updateCustomer,
  softDeleteCustomer,
  createProduct,
  updateProduct,
  deleteProduct,
  createPlan,
  updatePlan,
  softDeletePlan,
  createPrice,
  softDeletePrice,
  updatePrice,
  invoiceCreated,
  createSub,
  updateSub,
  deleteSub,
};
