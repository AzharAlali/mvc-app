const Datastore = require('nedb') // set up a temporary (in memory) database

const studentsData = require('../data/students.json')
const coursesData = require('../data/courses.json')
const sectionsData = require('../data/sections.json')
const instructorsData = require('../data/instructors.json')

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections
  const studentdb={}
  const coursedb={}
  const sectiondb={}
  const instructordb={}

  
  

  studentdb.students=new Datastore()
  coursedb.courses=new Datastore()
  sectiondb.sections=new Datastore()
  instructordb.instructors=new Datastore()

  
  studentdb.students.loadDatabase()
  coursedb.courses.loadDatabase()
  sectiondb.sections.loadDatabase()
  instructordb.instructors.loadDatabase()

  // insert the sample data into our datastore
  studentdb.students.insert(studentsData)
  coursedb.courses.insert(coursesData)
  sectiondb.sections.insert(sectionsData)
  instructordb.instructors.insert(instructorsData)
  

  // initialize app.locals (these objects are available to the controllers)
  app.locals.students=studentdb.students.find(studentsData)
  app.locals.courses=coursedb.courses.find(coursesData)
  app.locals.sections=sectiondb.sections.find(sectionsData)
  app.locals.instructors=instructordb.instructors.find(instructorsData)
  
  
  console.log(`${app.locals.students.query.length} students seeded`)
  console.log(`${app.locals.sections.query.length} sections seeded`)
  console.log(`${app.locals.courses.query.length} courses seeded`)
  console.log(`${app.locals.instructors.query.length} instructors seeded`)
  console.log('END Data Seeder. Sample data read and verified.')
  
}
