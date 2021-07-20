const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shorturlSchema = new Schema({
  url: {
    type: String,
    require: true
  },
  id: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Shorturl', shorturlSchema)
