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
    minlength: 5,
    maxlength: 10,
    required: true,
    unique: true,
    default: '44'
   },
   courseNumber: {
    type: String,
    minlength: 5,
    maxlength: 10,
    required: true,
    unique: true,
    default: '563'  
   },
   Name: {
   type: String,
   minlength: 10,
   maxlength: 100,
   required: true,
   unique: true,
   default: 'Developing Web Apps and Services'
   },
   inSpring: {
   type: boolean,
   required: true,
   default: false
   },
   inSummer: {
   type: boolean,
   required: true,
   default: false
   },
   inFall: {
   type: boolean,
   required: true,
   default: false
   }

 } )
module.exports = mongoose.model('course', courseSchema)
s