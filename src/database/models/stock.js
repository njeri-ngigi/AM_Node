'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    stock_type: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    quality: DataTypes.STRING,
    description: DataTypes.TEXT,
    stock_image_url: DataTypes.STRING
  }, {});
  Stock.associate = function(models) {
    // associations can be defined here
  };
  return Stock;
};