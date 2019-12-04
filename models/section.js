/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Praneeth Reddy <praneethreddy@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  sectionNumber: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: true,
    unique: true
  },
  days: {
    type: String,
    minlength: 1,
    maxlength: 5,
    required: true,
    default: 'MWF',
    unique:true
  },
  startTime: {
    type: Number,
    minlength: 3,
    maxlength: 4,
    required: true,
    default: '1100',
    unique:true
  },
  roomNumber: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
    default: 'CH 1200',
    unique:true
  },
  instructorId: {
    type: Number,
    required:true
  },
  courseId: {
    type: Number,
    required: true
  }

})
module.exports = mongoose.model('Section', SectionSchema)
