'use strict'

const User = require('../models/user')

const getUser = async (req, res) => {
  try {
    const selectedUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    })
    res.status(200)
    res.send(selectedUser)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201)
    res.send(newUser)
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const addToWatchlist = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    user.watchlist.push(req.body.option) // this data should come from the company and not the option chain
    await user.save()
    res.send()
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const addToPortfolio = async (req, res) => {
  try {
    const { email, option } = req.body
    const user = await User.findOne({ email })
    user.portfolio.push(option)
    user.balance = user.balance - option.ask * option.contract_size // multiply by the contract size
    // this should be user.balance = user.balance - req.body.option.ask*req.body.option.contract_size
    // because the "buy price" you want to show on the browser is just the ask multiplied by the contract size
    await user.save()
    res.send()
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const removeFromWatchlist = async (req, res) => {
  try {
    const { email, option } = req.body
    const user = await User.findOne({ email })
    user.watchlist = user.watchlist.filter((userOption) => {
      // console.log({user: `${userOption._id}`, option: `${option._id}`})
      return `${userOption._id}` !== `${option._id}`
    })
    await user.save()
    res.send()
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const sell = async (req, res) => {
  try {
    const { email, option } = req.body
    const user = await User.findOne({ email })
    user.portfolio = user.portfolio.filter(
      (userOption) => `${userOption._id}` !== `${option._id}`,
    )
    // user.balance = user.balance + option.bid*option.contract_size;
    console.log({ user, option })
    await user.save()
    res.send()
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

module.exports = {
  getUser,
  createUser,
  addToWatchlist,
  addToPortfolio,
  removeFromWatchlist,
  sell,
}
