'use strict';
module.exports = (sequelize, DataTypes) => {
  const Designer = sequelize.define('Designer', {
    stock_id: DataTypes.INTEGER,
    designer: DataTypes.STRING
  }, {});
  Designer.associate = function(models) {
    // associations can be defined here
  };
  return Designer;
};