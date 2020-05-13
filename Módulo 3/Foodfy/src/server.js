const express = require('express')
const routes = require('../src/routes')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk')

server.use(express.urlencoded({ extended: true }))
server.use(routes)
server.use(express.static('public'))

nunjucks.configure('src/app/views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen('3010', function() {
  console.log('Server is running')
})