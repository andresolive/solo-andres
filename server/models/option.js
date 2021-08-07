'use strict'

const mongoose = require('./db')

const Schema = mongoose.Schema

const optionSchema = new Schema({
  symbol: String,
  description: String,
  chain: {
    expiration1: [
      {
        symbol: String,
        description: String,
        bid: Number,
        ask: Number,
        strike: Number,
        contract_size: Number,
        expiration_date: String,
        option_type: String,
      },
    ],
    expiration2: [
      {
        symbol: String,
        description: String,
        bid: Number,
        ask: Number,
        strike: Number,
        contract_size: Number,
        expiration_date: String,
        option_type: String,
      },
    ],
  },
})

const Option = mongoose.model('Option', optionSchema)

module.exports = Option
