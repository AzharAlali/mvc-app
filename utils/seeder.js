const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const studentsData = require('../data/students.json')
const coursesData = require('../data/courses.json')
const sectionsData = require('../data/sections.json')
const sectionsData = require('../data/instructors.json')

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections
  const studentdb={}
  const coursedb={}
  const sectiondb={}
  const instructordb={}



  
  db.developers = new Datastore() // new object property

  studentdb.students=new Datastore()
  coursedb.courses=new Datastore()
  sectiondb.sections=new Datastore()
  instructordb.instructors=new Datastore()

  db.developers.loadDatabase() // call the loadDatabase method
  studentdb.students.loadDatabase()
  coursedb.courses.loadDatabase()
  sectiondb.sections.loadDatabase()
  instructordb.instructors.loadDatabase()

  // insert the sample data into our datastore
  studentdb.students.insert(studentsData)
  coursedb.courses.insert(coursesData)
  sectiondb.sections.insert(sectionsData)
  instructordb.instructors.insert(instructorsData)
  db.developers.insert(developerData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.students=studentdb.students.find(studentsData)
  app.locals.courses=coursedb.courses.find(coursesData)
  app.locals.sections=sectiondb.sections.find(sectionsData)
  app.locals.instructors=instructordb.instructors.find(instructorsData)
  app.locals.developers = db.developers.find(developerData)

  console.log(`${app.locals.developers.query.length} developers seeded`)
  console.log(`${app.locals.students.query.length} students seeded`)
  console.log(`${app.locals.sections.query.length} sections seeded`)
  console.log(`${app.locals.courses.query.length} courses seeded`)
  console.log(`${app.locals.instructors.query.length} instructors seeded`)
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
