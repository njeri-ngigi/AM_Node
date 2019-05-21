'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    profile_picture: DataTypes.STRING
  }, {});

  Customer.associate = (models) => {
    Customer.hasMany(models.Order, {
      foreignKey: 'order_id',
      as: 'orders'
    });
  };

  return Customer;
};
