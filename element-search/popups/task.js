// 1я модалка
const modalMain = document.getElementById('modal_main');
// 2я модалка
const modalSuccess = document.getElementById('modal_success');
// кнопка
const showSuccessBtn = document.getElementsByClassName('show-success')[0];
// крестики
const closeElements = document.querySelectorAll('.modal__close')

// В момент запуска скрипта, покажите окно #modal_main
modalMain.classList.add('modal_active');

// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
//Назначаем обработчики всем крестикам
closeElements.forEach((el)=> {
  el.addEventListener('click', closeHandler)
})

function closeHandler(){
  const modal = this.closest('.modal')
  modal.classList.remove('modal_active');
};

// По нажатию на элемент с классом show-success покажите окно #modal_success
const showSuccessHendler = () => {
  modalMain.classList.remove('modal_active')
  modalSuccess.classList.add('modal_active');
};

showSuccessBtn.addEventListener(('click'), showSuccessHendler)