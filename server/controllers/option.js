'use strict'

const Option = require('../models/option')

exports.getOptions = async (req, res) => {
  try {
    const options = await Option.find({}) // find() //getAll()
    res.status(200)
    // console.log(options);
    res.send(options)
  } catch (e) {
    console.log(e)
    res.sendStatus(400)
  }
}
