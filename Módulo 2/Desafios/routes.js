const express = require ('express')
const routes = express.Router()

routes.get('/', function(req, res) {
  return res.render('home')
})

routes.get('/about', function(req, res) {
  return res.render('about')
})

routes.get('/conteudos', function(req, res) {
  return res.render('conteudos')
})

module.exports = routes