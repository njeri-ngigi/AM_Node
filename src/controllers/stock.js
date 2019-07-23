const { createStock } = require('../services/stockService');
module.exports = {
  addStock: async (req, res) => {
    const {
      stockType: stock_type, stockImageUrl: stock_image_url,
      quantity, price, quality, description, sizes, fabric, designer
    } = req.body;

    await createStock(
      { stock_type, quantity, price, quality, description, stock_image_url, fabric, designer },
      sizes
    );

    res.send({
      message: 'add stock'
    })
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
