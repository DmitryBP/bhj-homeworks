
let reveal = document.querySelectorAll('.reveal')

function appear(el) {
  el.forEach(item => {
  let {top, bottom} = item.getBoundingClientRect()
  top > 0 && bottom < window.innerHeight ? item.classList.add('reveal_active') : item.classList.remove('reveal_active')
  });
}

window.addEventListener('scroll', () => {
  appear(reveal)
})