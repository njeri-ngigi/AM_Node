const dotenv = require('dotenv');

dotenv.config();

const { PORT, DATABASE_URL, ORIGIN_URL } = process.env;

module.exports = Object.freeze({
  PORT,
  DATABASE_URL,
  ORIGIN_URL
});
