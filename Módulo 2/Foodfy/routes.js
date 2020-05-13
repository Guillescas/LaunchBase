const express = require('express')
const routes = express.Router()
const recipeData = require("./data")

routes.get('/', function(req, res) {
  res.render('home')
})

routes.get('/about', function(req, res) {
  res.render('about')
})

routes.get('/recipes', (req, res) => {
  res.render('recipes', { items: recipeData })
})

module.exports = routes