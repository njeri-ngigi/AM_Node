const { Stock, Size, Color } = require('../database/models');

module.exports = {
  createStock: async (stock, sizes) => {
    const { dataValues: { id: stock_id }} = await Stock.create(stock);
    
    sizes.map(async (size)=>{
      const [type] = Object.keys(size);

      const { id: size_id } = await Size.create({
        stock_id,
        size: type,
        quantity: size[type]
      });

      size.colors.map((color)=>{
        const [type] = Object.keys(color);
        Color.create({
          size_id,
          color: type,
          quantity: color[type]
        })
      });
    });
  }
}
