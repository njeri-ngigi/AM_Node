'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fabric = sequelize.define('Fabric', {
    stock_id: DataTypes.INTEGER,
    fabric: DataTypes.STRING
  }, {});
  Fabric.associate = function(models) {
    // associations can be defined here
  };
  return Fabric;
};