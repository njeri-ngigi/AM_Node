'use strict';
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    stock_id: DataTypes.INTEGER,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});

  Size.associate = (models) => {
    Color.belongsTo(models.Stock);
  };

  return Size;
};
