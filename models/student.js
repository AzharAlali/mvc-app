/**
*  Student model
*  Describes the characteristics of each attribute in a Student resource.
*
* @author kamal Reddy<s537153@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },
    given: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true
    },
    family: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true,
        unique: true
    },
    gpa: {
        type: Number,
        minimum: 1,
        maximum: 4,
        required: true,
        default: '0.0'
    },
    github: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true,
    },
    website: {
        type: String,
        minlength: 1,
        maxlength: 100,
    },
    sectionId: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('Student', StudentSchema)
