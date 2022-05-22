let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal__close')
let delBtn = document.querySelector('.btn') 

delBtn.onclick = () => {    //добавил кнопку удаления куки для проверки выполнения условия задачи
  document.cookie = "windowClosed = true; max-age=0";
  console.log(document.cookie)
}

if(!document.cookie) {
  modal.classList.add('modal_active')
}

modalClose.onclick = () => {
  modal.classList.remove('modal_active')
  document.cookie = 'windowClosed = true'
}



console.log(document.cookie)
