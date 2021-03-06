'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    amount_paid: DataTypes.FLOAT,
    balance: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER
  }, {});

  Order.associate = (models) => {
    Order.belongsTo(models.Customer);
    Order.belongsTo(models.Stock);
  };

  return Order;
};
