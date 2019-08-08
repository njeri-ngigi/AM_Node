'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Customers', 
    [
      {
        name: 'customer1',
        email: 'customer1@test.com',
        profile_picture: 'https://images.pexels.com/photos/36759/graffiti-berlin-wall-wall-trabi.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        phone_number: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'customer2',
        email: 'customer2@test.com',
        profile_picture: 'https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        phone_number: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'customer3',
        email: 'customer3@test.com',
        profile_picture: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        phone_number: '5432167890',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'customer4',
        email: 'customer4@test.com',
        profile_picture: 'https://images.pexels.com/photos/345156/pexels-photo-345156.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        phone_number: '6789054321',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'customer5',
        email: 'customer5@test.com',
        profile_picture: 'https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        phone_number: '1234509876',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Customers', null, {})
};
