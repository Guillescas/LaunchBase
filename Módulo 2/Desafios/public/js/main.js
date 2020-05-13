const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function() {
    let curso = card.getAttribute('id')
    window.open(`https://rocketseat.com.br/${curso}`)
  })
}

