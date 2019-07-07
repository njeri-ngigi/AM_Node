const { validationResult } = require('express-validator');
const { createCustomer, getAllCustomers, getCustomerById } = require('../services/customerService');

module.exports = {
  addCustomer: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send({ errors: errors.array() });

    const {
      name, email, phoneNumber: phone_number, profilePicture: profile_picture
    } = req.body;

    try {
      await createCustomer({ name, email, phone_number, profile_picture });
      res.status(201).send({ message: `A new user '${name}', added!` })
    } catch(error) {
      let message = "Something went wrong. Try again or reach out for IT support";
      if (error.name === 'SequelizeUniqueConstraintError') {
        const { path } = error.errors[0];
        message = `It seems a user with this ${path} already exists, try updating the customer details or use a different ${path}.`
      }
      console.log(error);
      res.status(500).send({ message });
    }    
  },

  getCustomers: async (req, res) => {
    const allcustomers = await getAllCustomers();
    const serializedData = allcustomers.map(({ dataValues }) => dataValues);
    res.send(serializedData);
  },

  getCustomer: async (req, res) => {
    const customer = await getCustomerById(req.params.id);
    if (customer) return res.send(customer)
    return res.status(404).send({
      message: "customer not found"
    })
  }
}
