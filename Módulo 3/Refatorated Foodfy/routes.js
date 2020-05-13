const express = require('express')
const routes = express.Router()
const recipeData = require("./data")

routes.get('/', function(req, res) {
  res.render('home')
})

routes.get('/about', function(req, res) {
  res.render('about')
})

routes.get('/recipes', function(req, res) {
  res.render('recipes', { items: recipeData })
})

routes.get("/recipes/:index", (req, res) => {
  const recipeIndex = req.params.index
  res.render("recipe", { recipe: recipeData[recipeIndex] });
})

module.exports = routes