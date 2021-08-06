require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config/config')

const router = require('./routes/router')

const PORT = config.PORT

app.use(cors())
app.use(express.json())
app.use(router)

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

module.exports = server
