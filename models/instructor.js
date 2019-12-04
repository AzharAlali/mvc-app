/**
*  Instructor model
*  Describes the characteristics of each attribute in a Instructor resource.
*
* @author Azhar Alali<Azhar@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const InstructorSchema = new mongoose.Schema({

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
        required: true
    },
    github: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Instructor', InstructorSchema)
