const { DATABASE_URL } = require('../../environment');

const defaultConfig = {
  databaseUrl: DATABASE_URL,
  dialect: 'postgres',
  use_env_variable: "DATABASE_URL"
}

module.exports = {
  development: {
    ...defaultConfig
  },
  test: {
    ...defaultConfig
  },
  production: {
    ...defaultConfig
  }
}
