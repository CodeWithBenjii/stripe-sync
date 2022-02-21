const { createCustomer, updateCustomer, softDeleteCustomer } = require('./customer.model');
const { createProduct, updateProduct, deleteProduct } = require('./product.controller');

module.exports = {
  createCustomer,
  updateCustomer,
  softDeleteCustomer,
  createProduct,
  updateProduct,
  deleteProduct,
};
