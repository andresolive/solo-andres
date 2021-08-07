require('dotenv').config()

const isTest = process.env.NODE_ENV === 'test'

const config = {
  PORT: 3001,
  DB_NAME: process.env.DB_NAME,
  DB_URL: process.env.DB_URL,
}

const testConfig = {
  PORT: 3005,
  DB_NAME: process.env.DB_NAME_TEST,
  DB_URL: process.env.DB_URL_TEST,
}

module.exports = isTest ? testConfig : config
