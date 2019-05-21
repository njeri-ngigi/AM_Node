'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    stock_type: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    quality: DataTypes.STRING,
    designer: DataTypes.STRING,
    description: DataTypes.TEXT,
    stock_image_url: DataTypes.STRING
  }, {});

  Stock.associate = (models) => {
    Stock.hasMany(models.Order, {
      foreign_key: 'order_id',
      as: 'orders'
    });

    Stock.hasMany(models.Color, {
      foreign_key: 'color_id',
      as: 'colors'
    });

    Stock.hasMany(models.Size, {
      foreign_key: 'size_id',
      as: 'sizes'
    });

    Stock.hasMany(models.Fabric, {
      foreign_key: 'fabric_id',
      as: 'fabrics'
    });
  };

  return Stock;
};
