const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../utils')

// schema
const socialSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true
  },
  petAge: {
    type: Number,
    required: true
  },
  suburb: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  avatar: {
    type: String,
    required: true    
  }
}, { timestamps: true })


// model
const socialModel = mongoose.model('Social', socialSchema)

// export
module.exports = socialModel
