'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    stock_type: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quality: DataTypes.STRING,
    designer: DataTypes.STRING,
    description: DataTypes.TEXT,
    stock_image_url: DataTypes.STRING,
    fabric: DataTypes.STRING
  }, {});

  Stock.associate = (models) => {
    Stock.hasMany(models.Order, {
      foreignKey: 'stock_id',
      as: 'orders'
    });

    Stock.hasMany(models.Size, {
      foreignKey: 'stock_id',
      as: 'sizes'
    });
  };
  return Stock;
};
