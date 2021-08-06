'use strict'

const router = require('express').Router()
const user = require('../controllers/user')
const option = require('../controllers/option')

router.post('/login', user.getUser)
router.post('/register', user.createUser)
router.get('/options', option.getOptions)
router.post('/addToWl', user.addToWatchlist)
router.post('/addToPf', user.addToPortfolio)
router.put('/removeFromWl', user.removeFromWatchlist)
router.put('/sell', user.sell)

module.exports = router
