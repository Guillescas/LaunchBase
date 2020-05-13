const menuItems = document.querySelectorAll('.links a')
const url = window.location.pathname

for (item of menuItems) {
  if (url.includes(item.getAttribute('href'))) {
    item.classList.add('active')
  }
}

