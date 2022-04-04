
let modal1 = document.getElementById('modal_main')
let modal2 = document.getElementById('modal_success')
let xx = Array.from(document.querySelectorAll('.modal__close')) 
// let xx = document.querySelectorAll('.modal__close') ? Так тоже работает 
let button = document.getElementsByClassName('btn')

modal1.classList.add('modal_active')

//Удаление попапа
xx.forEach(x => {
  x.onclick = (event) => {
    currentModal = event.target.closest('.modal_active') // Вы писали про This, я не понял где его использовать
    currentModal.classList.remove('modal_active')
  }
});

// Вывод другого попапа
button[0].onclick = () => {
  modal1.classList.remove('modal_active')
  modal2.classList.add('modal_active')
}

// В первом задании у вас по клику на крестик добавляется обработчик события на каждый элемент крестика.
//  Вам нужно сделать универсальный обработчик кликов по крестику. 
//  Вы можете с помощью цикла перебирать все элементы крестиков и на них добавлять обработчик события, 
// а внутри обработчика события с помощью контекста вызова (this) в котором находится объект на котором произошло событие с помощью closest находить то модальное окно к которому принадлежит крестик и его закрывать.