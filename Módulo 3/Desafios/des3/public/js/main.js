const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function() {
    let curso = card.getAttribute('id')
    window.location.href = `/courses/${curso}`
  })
}

const btn = document.querySelector('#courseBtn')

btn.addEventListener('click', () => {
  let divCardCourse = document.querySelector('.cardCourse')
  let course = divCardCourse.getAttribute('id')
  window.open(`https://rocketseat.com.br/${course}`)
})

