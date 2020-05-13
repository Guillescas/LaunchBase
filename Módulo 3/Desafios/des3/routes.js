const express = require ('express')
const routes = express.Router()

const courses = require('./data')

routes.get('/', function(req, res) {
  const links = [
    {link: "https://github.com/rocketseat/", media: "GutHub"}, 
    {link: "https://facebook.com/rocketseat/", media: "Facebook"}, 
    {link: "https://www.linkedin.com/school/rocketseat/", media: "Linkedin"}
  ]

  return res.render('home', {itens: links})
})

routes.get('/about', function(req, res) {
  const about = {
    img: "https://camo.githubusercontent.com/e3a00cb35e63ebc807f3d6c3178e1f17c24a70f3/68747470733a2f2f726f636b6574736561742e636f6d2e62722f7374617469632f6f672e706e67",
    description: "A Rocketseat oferece através de uma plataforma inteligente e metodologia prática, além de comunidade, eventos, conteúdo e conexão com o mercado de trabalho, todas as ferramentas que você precisa para masterizar no menor tempo possível as tecnologias mais modernas de desenvolvimento web e mobile, e dessa forma avançar para o próximo nível como programador.",
    textTechs: "As principais tecnologias que têm o foco da empresa são:",
    techs: [{tech: "HTML"}, {tech:"CSS"}, {tech:"JavaScript"}],
    links: [
      {link: "https://github.com/rocketseat/", media: "GutHub"}, 
      {link: "https://facebook.com/rocketseat/", media: "Facebook"}, 
      {link: "https://www.linkedin.com/school/rocketseat/", media: "Linkedin"}
    ]
  }

  return res.render('about', {about: about})
})

routes.get('/courses', function(req, res) {
  const cardsData = require('./data') 

  return res.render('courses', {itens: cardsData})
})

routes.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  
  const course = courses.find(function(courses) {
    return courses.id == id
  });

  if (!course) {
    return res.render("not-found");
  }

  return res.render("course", { item: course });
});

module.exports = routes