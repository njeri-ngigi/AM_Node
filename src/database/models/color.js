'use strict';
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    stock_id: DataTypes.INTEGER,
    color: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});

  Color.associate = (models) => {
    Color.belongsTo(models.Stock);
  };

  return Color;
};
