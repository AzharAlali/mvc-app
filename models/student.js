/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author kamal Reddy <denisecase@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

    _id: {
        type: String,
        required: true
      },
      Given: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: false,
        default: 'Given name'
      },
      Family: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: false,
        default: 'Family name'
      },
      Email: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true,
        unique: true 
      },
      GPA: {
          type: Number,
          minlength: 1,
          maxlength: 3,
          required: true,
      },
      Github: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true,
        unique: true  
      },
      Website: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true,
        unique: true   
      },
      SectionID: {
        type: Number,
        minlength: 1,
        maxlength: 2,
        required: true,
      }
})
module.exports = mongoose.model('Student', StudentSchema)
// the model Developer is for the developers collection in the database.
