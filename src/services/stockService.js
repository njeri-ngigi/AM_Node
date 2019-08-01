const { Stock, Size, Color } = require('../database/models');

const createItemOrUpdateQuantity = async (Model, item, staticItems) => {
  let id;
  const { quantity: newQuantity } = item;
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
    const staticItems = { stock_id, size: type };
    const size_id = await createItemOrUpdateQuantity(Size, {
      ... staticItems,
      quantity: size[type]
    }, staticItems);

    size.colors.map(async (color)=>{
      const [type] = Object.keys(color);
      const colorStaticItems = { size_id, color: type }
      await createItemOrUpdateQuantity(Color, {
        ...colorStaticItems,
        quantity: color[type]
      }, colorStaticItems)
    });
  });
}

const createStock = async (stock, sizes) => {
  const { stock_type, price, fabric, designer } = stock;
  const stock_id = await createItemOrUpdateQuantity(Stock, stock, 
    { stock_type, price, fabric, designer });
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

const getAllStock = () => Stock.findAll();

const getAllStockInclusive = () => Stock.findAll({ include });

const getStockType = () => Stock.findAll({ attributes: ['stock_type'] })

module.exports = {
  createStock,
  getStockById,
  getAllStock,
  getStockType,
  getAllStockInclusive
}
