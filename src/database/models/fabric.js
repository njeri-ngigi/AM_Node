'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fabric = sequelize.define('Fabric', {
    stock_id: DataTypes.INTEGER,
    fabric: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});

  Fabric.associate = (models) => {
    Color.belongsTo(models.Stock);
  };

  return Fabric;
};
