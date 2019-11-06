/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author jeevan mure <s536980@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const instructorSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  schoolNumber: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: false,
    default: 'schoolNumber'
  },
  courseNumber: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: false,
    default: 'courseNumber'
  },
  
  Name : {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: "Name"
  },
  inSpring: {
    type: Boolean,
    
    required: true,
    default: false
  },
  inSummer: {
    type: Boolean,
    
    required: true,
    default: false
  },
  inFall: {
    type: Boolean,
    
    required: true,
    default: false
  }

 } )
module.exports = mongoose.model('course', courseSchema)
s