const { check } = require('express-validator');

module.exports = {
  validateUser: () => {
    return [
      check('name', 'Please enter a valid name').isString().trim().isLength({ min: 2 }),
      check('email', 'Please enter a valid email address').trim().isEmail(),
      check('phoneNumber', 'Please enter a valid phone number').trim().isNumeric().isLength({ min: 10 }),
      check('profilePicture', 'invalid profile picture url').trim().isLength({ min: 3 }),
    ]
  }
};
