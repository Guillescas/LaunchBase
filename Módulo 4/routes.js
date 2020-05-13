// O express estpa explicado no arquivo "server.js"
const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

// Quando o server é iniciado, ele procura rota principa, que é a "/". E é o mesmo esquema de iniciar um servidor
// Quando o server acha a rota principal, ele executa uma função. Nesse caso, o req é request, e res, response. Ou seja, 
// request e response do server
routes.get('/', function(req, res) {
    return res.redirect("/instructors") //resposta do servidor, neste caso, uma página web
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {
    return res.render('instructors/create')
})

routes.get("/instructors/:id", instructors.show)

routes.get("/instructors/:id/edit", instructors.edit)

routes.post('/instructors', instructors.post)

routes.put("/instructors", instructors.put)

routes.get('/members', function(req, res) {
    return res.send("members")
})

routes.get('/prof', function(req, res) {
    return res.render("instructors/prof")
})

module.exports = routes