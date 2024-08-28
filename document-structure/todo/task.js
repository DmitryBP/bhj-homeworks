const TASK_TEMPLATE = `
  <div class="task__title">
    {taskText}
  </div>
  <a href="#" class="task__remove">&times;</a>`;
console.log(localStorage);
const clearBtn = document.querySelector('.clear');
const inputElement = document.querySelector('.tasks__input');
const addBtnElement = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');
const readMemory = () => JSON.parse(localStorage.getItem('tasks'));
const rewriteTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

// Получаем задачи из localStorage
readMemory()?.forEach((task) => renderTask(task.text));

addBtnElement.addEventListener('click', addHandler);

function addHandler(event) {
  event.preventDefault();
  const taskText = inputElement.value;
  if (taskText) {
    saveTask(taskText);
    renderTask(taskText);
    inputElement.value = '';
  }
}

function saveTask(taskText) {
  const tasks = readMemory() || [];
  tasks.push({ text: taskText });
  rewriteTasks(tasks);
}

function renderTask(taskText) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  taskElement.innerHTML = TASK_TEMPLATE.replace('{taskText}', taskText);
  taskList.append(taskElement);
  taskElement.querySelector('.task__remove').addEventListener('click', removeHandler);
}

function removeHandler(event) {
  event.preventDefault();
  const task = event.target.closest('.task');
  task.remove(); // Удаляем задачу из DOM

  // Удаляем задачу из памяти
  const taskText = task.querySelector('.task__title').textContent.trim();
  const tasks = readMemory();
  const index = tasks.findIndex((task) => task.text === taskText);
  if (index !== -1) {
    tasks.splice(index, 1);
    rewriteTasks(tasks);
  }
}

clearBtn.onclick = (event) => {
  event.preventDefault();
  rewriteTasks([]);
};
