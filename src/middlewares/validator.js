const { check } = require('express-validator');

const numberTest = (number) => /^[0-9]+$/.test(number);

const validateColors = (colors) => {
  let errors = false;
  colors.map(color => {
    const [colorType] = Object.keys(color); 
    if (!numberTest(color[colorType])) errors = true
  })
  return errors;
}

const validateSizes = (sizes) => {
  let noErrors = true;
  sizes.map((size) => {
    const [sizeType] = Object.keys(size);
    if (!numberTest(size[sizeType])) noErrors = false;
    if (!Array.isArray(size.colors)) noErrors = false;
    if (validateColors(size.colors)) noErrors = false;
  });
  return noErrors;
}

const sizeFormat = `  
  'sizes': [{ 'medium': 4, 'colors': [{ 'blue': 1 }, { 'green':3 }] }, { 'large': 1, 'colors': [{ 'red': 1 }] }]`

module.exports = {
  validateUser: () => {
    return [
      check('name', 'Please enter a valid name').isString().trim().isLength({ min: 2 }),
      check('email', 'Please enter a valid email address').trim().isEmail(),
      check('phoneNumber', 'Please enter a valid phone number').trim().isNumeric().isLength({ min: 10 }),
      check('profilePicture').trim().not().isEmpty(),
    ]
  },

  validateStock: () => {
    return [
      check('stockType', 'stock type should have atleast 3 characters').trim().isLength({ min: 3 }),
      check('stockImageUrl').trim().not().isEmpty(),
      check('price', 'price should be greater than 0').isNumeric().custom((value) => value >= 0),
      check('quality').trim().not().isEmpty(),
      check('quantity', 'price should be greater than 0').isNumeric().custom((value) => value >= 0),
      check('designer').trim().not().isEmpty(),
      check('fabric').trim().not().isEmpty(),
      check('description').trim().not().isEmpty(),
      check('sizes').isArray().custom((sizes) => validateSizes(sizes)).withMessage(`Ensure the sizes array is in this format${sizeFormat}`)
    ]
  },


};
