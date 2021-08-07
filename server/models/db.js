const mongoose = require('mongoose')
const config = require('../config/config')

mongoose.connect(
  `mongodb://${config.DB_URL}/${config.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('🔴 error connecting', err)
    } else {
      console.log('✅ connected to the db')
    }
  },
)

module.exports = mongoose
