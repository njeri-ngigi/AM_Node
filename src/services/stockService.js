const { Stock, Size, Color } = require('../database/models');

const addStock = async (stock) => {
  const { stock_type, price, fabric, designer } = stock;
  const [{id}] = await Stock.findOrCreate({
    where: { stock_type, price, fabric, designer },
    defaults: stock
  })
  return id;
}

const createItemOrUpdateQuantity = async (Model, item) => {
  let id;
  const { quantity: newQuantity , ...staticItems } = item;
  const foundItem = await Model.findOne({ 
      where: { ...staticItems },
      underscored: true
    }); 
  if(!foundItem) {
    ({ dataValues: { id }} = await Model.create(item))
  } else {
    const { quantity } = foundItem.dataValues;
    ({id} = foundItem.dataValues);
    const updatedQuantity = quantity + newQuantity;
    await Model.update({ quantity: updatedQuantity }, { where: { id }})
  }
  return id;
}

const createSizes = (sizes, stock_id) => {
  sizes.map(async (size)=>{
    const [type] = Object.keys(size);
    const size_id = await createItemOrUpdateQuantity(Size, {
      stock_id,
      size: type,
      quantity: size[type]
    });

    size.colors.map(async (color)=>{
      const [type] = Object.keys(color);
      await createItemOrUpdateQuantity(Color, {
        size_id,
        color: type,
        quantity: color[type]
      })
    });
  });
}

const createStock = async (stock, sizes) => {
  const stock_id = await addStock(stock);
  await createSizes(sizes, stock_id);
}

const include = [
  { 
    model: Size,
    as: 'sizes',
    include: [
      {
        model: Color,
        as: 'colors'
      }
    ]
  }
]

const getStockById = (id) => Stock.findByPk(id, { include });

const getAllStock = () => Stock.findAll({ include });

const getStockType = () => Stock.findAll({ attributes: ['stock_type'] })

module.exports = {
  createStock,
  getStockById,
  getAllStock,
  getStockType
}
