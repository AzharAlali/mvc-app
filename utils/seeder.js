const Datastore = require('nedb') // set up a temporary (in memory) database
const studentData = require('../data/students.json') // read in data file

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.students = new Datastore() // new object property
  db.students.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.students.insert(studentData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.students = db.students.find(studentData)
  console.log(`${app.locals.students.query.length} students seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
  const courseData = require('../data/courses.json') // read in data file
  db.courses = new Datastore() // new object property
  db.courses.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.courses.insert(courseData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.courses = db.courses.find(courseData)
  console.log(`${app.locals.developers.query.length} courses seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
  

  const instructorData = require('../data/instructors.json') // read in data file
  db.instructors = new Datastore() // new object property
  db.instructors.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.instructors.insert(instructorData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.instructors = db.instructors.find(instructorData)
  console.log(`${app.locals.developers.query.length} developers seeded`)

  console.log('END Data Seeder. Sample data read and verified.')


}
