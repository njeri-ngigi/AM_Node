'use strict';
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    stock_id: DataTypes.INTEGER,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});

  Size.associate = (models) => {
    Size.belongsTo(models.Stock);
    Size.hasMany(models.Color, {
      foreign_key: 'color_id',
      as: 'colors'
    });
  };

  return Size;
};
