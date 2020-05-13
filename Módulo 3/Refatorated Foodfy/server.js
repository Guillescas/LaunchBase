const express = require('express')
const routes = require('./routes')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk')

server.use(routes)
server.use(express.static('public'))

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen('9000', function() {
  console.log('Server is running')
})