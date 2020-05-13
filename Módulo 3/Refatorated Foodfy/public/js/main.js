const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', () => {
    const id = card.getAttribute('id')
    window.location.href = `/recipes/${id}`
  })
}

const showHides = document.querySelectorAll('#section')

for (let showHide of showHides) {
  const btn = showHide.querySelector('button')

  showHide.addEventListener('click', () => {
    if (btn.innerHTML == 'MOSTRAR') {
      showHide.querySelector('.list').classList.add('active')
      btn.innerHTML = 'ESCONDER'
    } else {
      showHide.querySelector('.list').classList.remove('active')
      btn.innerHTML = 'MOSTRAR'
    }
    
  })
}