let links = Array.from(document.getElementsByClassName('menu__link'))
// let sub = Array.from(document.getElementsByClassName('menu_sub'))

links.forEach(link => {
  link.onclick = () => {
    if (link.nextElementSibling) {
      link.nextElementSibling.classList.toggle('menu_active')
      return false
    }
  }
});


