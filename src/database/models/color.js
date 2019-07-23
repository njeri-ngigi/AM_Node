'use strict';
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    size_id: DataTypes.INTEGER,
    color: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});

  Color.associate = (models) => {
    Color.belongsTo(models.Size);
  };

  return Color;
};
