let tabs = Array.from(document.querySelectorAll('.tab'))
let content = document.querySelectorAll('.tab__content')
let activTab = document.querySelector('.tab_active')
let activContant = document.querySelector('.tab__content_active')

tabs.forEach((tab, i) => {
  tab.onclick = () => {
    activTab.classList.remove('tab_active')
    activContant.classList.remove('tab__content_active')
    tabs[i].classList.add('tab_active')
    content[i].classList.add('tab__content_active')
    activTab = tabs[i]
    activContant = content[i]
  }
});