const addTaskBtn = document.querySelector('.tasks__add')
const taskInput = document.querySelector('.tasks__input')
const taskList = document.querySelector('.tasks__list')

// Получаем задачи из localStorage
console.log(localStorage);
const storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
  const tasks = JSON.parse(storedTasks);
  tasks.forEach((task) => {
    addTaskToDOM(task);
  });
}

// Функция добавления задачи в DOM
function addTaskToDOM(task) {
  const taskElement = document.createElement('div');
  taskElement.className = 'task';
  taskElement.innerHTML = `
    <div class="task__title">${task.text}</div>
    <a href="#" class="task__remove">&times;</a>
  `;
  taskList.appendChild(taskElement);
  // Добавляем обработчик события удаления задачи
  taskElement.querySelector('.task__remove').addEventListener('click', removeTask);
}

// Обработчик события добавления задачи
addTaskBtn.addEventListener('click', addTask);

// Обработчик события нажатия клавиши Enter
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Функция добавления задачи
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const task = { text: taskText }; // зачем хранить текст в объектах можно же напрямую сохранять тексты в массив
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addTaskToDOM(task);
    taskInput.value = '';
  }
}

// Функция удаления задачи
function removeTask(e) {
  e.preventDefault();
  const task = e.target.closest('.task');
  const taskText = task.querySelector('.task__title').textContent;
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((task) => task.text === taskText);
  if (index!== -1) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  taskList.removeChild(task);
}