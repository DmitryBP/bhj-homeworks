const input = document.querySelector('.tasks__input')
const form = document.querySelector('.tasks__control')
const taskList = document.querySelector('.tasks__list')
const data = JSON.parse(localStorage.getItem('items'))
const clinBtn = document.querySelector('.clin')

let arrItems 
localStorage.getItem('items') ? arrItems = JSON.parse(localStorage.getItem('items')) : arrItems = []

form.onsubmit = () => {
  return false
}

let addItem = text => {
  taskList.insertAdjacentHTML('afterbegin', `
  <div class="task">
  <div class="task__title">
  ${text}
  </div>
  <a href="#" class="task__remove">&times;</a>
  </div>
  `)
  // input.value = ''
}

let taskDelete = () => {
  const xx = taskList.querySelectorAll('.task__remove')
  xx.forEach((x, i) => {
    x.onclick = () => {
      arrItems.splice(i, 1)
      x.closest('.task').remove()
      localStorage.setItem('items', JSON.stringify(arrItems))
    }
  });
}

input.onchange = () => {
  taskDelete()
  
  addItem(input.value)

  arrItems.push(input.value)

  localStorage.setItem('items', JSON.stringify(arrItems))
}

data.forEach(item => {
  addItem(item)
});

taskDelete()