/**
*  Course controller
*  Handles requests related to Course resources.
*
* @author jeevan mure <jeevanreddymure@gmail.com>
*
*/
const express = require('express')
const api = express.Router()
const Model = require('../models/course.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find Course with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.courses.query
  res.send(JSON.stringify(data))
})


// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------
// GET to this controller base URI (the default)
api.get('/', (req, res) => {
    res.render('course/index.ejs', {
      courses: req.app.locals.courses.query
    })
  })
  api.get('/create', (req, res) => {
    LOG.info(`Handling GET /create${req}`)
    const item = new Model()
    LOG.debug(JSON.stringify(item))
    res.render('course/create',
      {
        title: 'Create course',
        layout: 'layout.ejs',
        course: Name
      })
  })
  
  // GET /delete/:id
  api.get('/delete/:id', (req, res) => {
    LOG.info(`Handling GET /delete/:id ${req}`)
    const id = parseInt(req.params.id, 10) // base 10
    const data = req.app.locals.customers.query
    const item = find(data, { _id: id })
    if (!item) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
    return res.render('course/delete.ejs',
      {
        title: 'Delete course',
        layout: 'layout.ejs',
        course: Name
      })
  })
  
  // GET /details/:id
  api.get('/details/:id', (req, res) => {
    LOG.info(`Handling GET /details/:id ${req}`)
    const id = parseInt(req.params.id, 10) // base 10
    const data = req.app.locals.customers.query
    const item = find(data, { _id: id })
    if (!item) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
    return res.render('course/details.ejs',
      {
        title: 'course Details',
        layout: 'layout.ejs',
        course: Name
      })
  })
  
  // GET one
  api.get('/edit/:id', (req, res) => {
    LOG.info(`Handling GET /edit/:id ${req}`)
    const id = parseInt(req.params.id, 10) // base 10
    const data = req.app.locals.customers.query
    const item = find(data, { _id: id })
    if (!item) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR${JSON.stringify(item)}`)
    return res.render('course/edit.ejs',
      {
        title: 'courses',
        layout: 'layout.ejs',
        course: Name
      })
  })
  
  // HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------
  
  // POST new
  api.post('/save', (req, res) => {
    LOG.info(`Handling POST ${req}`)
    LOG.debug(JSON.stringify(req.body))
    const data = req.app.locals.customers.query
    const item = new Model()
    LOG.info(`NEW ID ${req.body._id}`)
    item._id = parseInt(req.body._id, 10) // base 10
    item.customername = req.body.customername
    item.email = req.body.email
    item.street1 = req.body.street1
    item.street2 = req.body.street2
    item.city = req.body.city
    item.state = req.body.state
    item.country = req.body.country
    item.phno = req.body.phno
   
      data.push(item)
      LOG.info(`SAVING NEW customer ${JSON.stringify(item)}`)
      return res.redirect('/customer')
    }
  )
  
  // POST update
  api.post('/save/:id', (req, res) => {
    LOG.info(`Handling SAVE request ${req}`)
    const id = parseInt(req.params.id, 10) // base 10
    LOG.info(`Handling SAVING ID=${id}`)
    const data = req.app.locals.customers.query
    const item = find(data, { _id: id })
    if (!item) { return res.end(notfoundstring) }
    LOG.info(`ORIGINAL VALUES ${JSON.stringify(item)}`)
    LOG.info(`UPDATED VALUES: ${JSON.stringify(req.body)}`)
    item.customername = req.body.customername
    item.email = req.body.email
    item.street1 = req.body.street1
    item.street2 = req.body.street2
    item.city = req.body.city
    item.state = req.body.state
    item.country = req.body.country
    item.phno = req.body.phno
      LOG.info(`SAVING UPDATED customer ${JSON.stringify(item)}`)
      return res.redirect('/customer')
    }
  )
  
  // DELETE id (uses HTML5 form method POST)
  api.post('/delete/:id', (req, res) => {
    LOG.info(`Handling DELETE request ${req}`)
    const id = parseInt(req.params.id, 10) // base 10
    LOG.info(`Handling REMOVING ID=${id}`)
    const data = req.app.locals.customers.query
    const item = find(data, { _id: id })
    if (!item) {
      return res.end(notfoundstring)
    }
    if (item.isActive) {
      item.isActive = false
      console.log(`Deacctivated item ${JSON.stringify(item)}`)
    } else {
      const item = remove(data, { _id: id })
      console.log(`Permanently deleted item ${JSON.stringify(item)}`)
    }
    return res.redirect('/customer')
  })
// later

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// later

module.exports = api