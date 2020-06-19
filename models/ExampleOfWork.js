const mongoose = require('mongoose')
const ExampleOfWorkSchema = mongoose.Schema({
  link:{
    type: String,
    required: false
  },
  title:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true,
    min: 120
  },
  price:{
    type: String,
    required: true
  }
})

const ExampleOfWork = mongoose.model('ExampleOfWork', ExampleOfWorkSchema)
module.exports = ExampleOfWork