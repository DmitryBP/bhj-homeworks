
let modal1 = document.getElementById('modal_main')
let modal2 = document.getElementById('modal_success')
let xx = Array.from(document.querySelectorAll('.modal__close')) 
let button = document.getElementsByClassName('btn')

modal1.classList.add('modal_active')

//Удаление попапа

xx.forEach(x => {
  x.onclick = function() {
    currentModal = this.closest('.modal_active') 
    currentModal.classList.remove('modal_active')
  }
});

// Вывод другого попапа
button[0].onclick = () => {
  modal1.classList.remove('modal_active')
  modal2.classList.add('modal_active')
}
