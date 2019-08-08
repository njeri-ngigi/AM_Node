const { validationResult } = require('express-validator');
const { createStock, getStockById, getAllStock, getStockType } = require('../services/stockService');


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

  getAllStock: async (req, res) => {
    const stock = await getAllStock();
    res.send(stock);
  },

  getStockById: async (req, res) => {
    const stock = await getStockById(req.params.id);
    if (stock) return res.send(stock)
    return res.status(404).send({
      message: 'stock not found'
    })
  },

  getStockType: async (req, res) => {
    const stockTypes = await getStockType();
    const types = stockTypes.map(type => type.stock_type);
    return res.send([...new Set(types)])
  }
}
