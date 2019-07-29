const { validationResult } = require('express-validator');
const { createStock } = require('../services/stockService');


module.exports = {
  addStock: async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).send({ errors: errors.array() });

    const {
      stockType: stock_type, stockImageUrl: stock_image_url,
      price, quality, description, sizes, fabric, designer
    } = req.body;

    await createStock(
      { stock_type, price, quality, description, stock_image_url, fabric, designer },
      sizes
    );

    res.status(201).send({ message: `${stock_type} stock added successfully` })
  },

  addStockInBulk: (req, res) => {
    res.send({
      message: 'add stock in bulk'
    })
  },

  getAllStock: (req, res) => {
    res.send({
      message: 'get all stock'
    })
  },

  getStockById: (req, res) => {
    res.send({
      message: 'get stock by ID'
    })
  }
}
