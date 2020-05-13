const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res) {
  const about = {
    avatar_url: "https://avatars3.githubusercontent.com/u/59893752?s=460&v=4",
    name: "Guilherme Illescas",
    role: 'Full-Stack Developer',
    description: 'Estudante de Engenharia de Software na PUCPR. Aluno da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    link: [
      { name: 'GitHub', url: 'https://github.com/guillescas/'},
      { name: 'Facebook', url: 'https://facebook.com/gui.illescas/'},
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/guilhermeillescas-5a9ab715b/'}
    ]
  }

  return res.render('about', {about: about})
})

server.get('/classes', function(req, res) {
  return res.render('classes', {items: videos})
})

server.get('/video', function(req, res) {
  const id = req.query.id

  const video = videos.find(function(video) {
    if (video.id == id) {
      return true
    }
  })

  if (!video) {
    return res.send('Video not found')
  }

  return res.render('video', {item: video})

})

server.listen(9999, function() {
  console.log('Server is running')
})