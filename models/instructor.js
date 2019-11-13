/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Denise Case <denisecase@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const instructorSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  salary: {
    type: Number,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 0
  },
  gitHub: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://gitHub.com'
  }

})
module.exports = mongoose.model('instructor', instructorSchema)
