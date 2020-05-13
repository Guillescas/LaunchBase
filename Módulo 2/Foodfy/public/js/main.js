const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal-overlay')

for (let card of cards) {
  card.addEventListener('click', function() {

    modal.classList.add('active')
  })
}

document.querySelector('.closeModal').addEventListener('click', function() {
  modal.classList.remove('active')
})