const { Customer } = require('../database/models');

module.exports = {
  createCustomer: customer => Customer.create(customer),
  getAllCustomers: () => Customer.findAll(),
  getCustomerById: id => Customer.findByPk(id)
}

