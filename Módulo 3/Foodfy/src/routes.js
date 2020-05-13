const express = require('express')
const routes = express.Router()
const recipe = require('./app/controllers/recipe')
const admin = require('./app/controllers/admin')

routes.get('/', recipe.index)
routes.get('/home', recipe.home)
routes.get('/about', recipe.about)
routes.get('/recipes', recipe.recipes)
routes.get("/recipes/:index", recipe.recipe)
routes.get("/recipes/:index/edit", recipe.edit)

routes.get('/admin/management', admin.management)


module.exports = routes