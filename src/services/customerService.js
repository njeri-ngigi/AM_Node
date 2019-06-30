const { Customer } = require('../database/models');

module.exports = {
  createCustomer: customer => Customer.create(customer)
}

