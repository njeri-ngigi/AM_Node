'use strict';
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    stock_id: DataTypes.INTEGER,
    size: DataTypes.STRING
  }, {});
  Size.associate = function(models) {
    // associations can be defined here
  };
  return Size;
};