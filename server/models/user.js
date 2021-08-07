'use strict'

const mongoose = require('./db')

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  balance: {
    type: Number,
    default: 1000000,
  },
  watchlist: [
    {
      symbol: String, // long symbol
      description: String,
    },
  ],
  portfolio: [
    {
      symbol: String, // long symbol
      description: String,
      option_type: String,
      contract_size: Number,
      bid: Number,
      ask: Number,
      buy_price: Number, // equal to ask at the time you bought
      strike: Number,
      expiration_date: String,
    },
  ],
})

const User = mongoose.model('User', userSchema)

module.exports = User
