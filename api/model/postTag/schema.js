const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postTag = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = postTag