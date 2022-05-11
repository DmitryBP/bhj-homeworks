const input = document.querySelector(".tasks__input");
const form = document.querySelector(".tasks__control");
const taskList = document.querySelector(".tasks__list");
const data = JSON.parse(localStorage.getItem("items"));
const clinBtn = document.querySelector(".clin");

let arrItems = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

form.onsubmit = () => {
  return false;
};

let addItem = (text) => {
  taskList.insertAdjacentHTML(
    "afterbegin",
    `<div class="task"><div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a></div>`
  );
};

/* Если вы добавляете задачу в самое начало, 
то добавляйте обработчик события только на самый первый элемент крестика */
/* Видимо я не правильно понял Вашу идею  */

/* let taskDelete = () => {
  const AllDellButton = taskList.querySelectorAll('.task__remove')
  AllDellButton[0].onclick = () => {
    AllDellButton[0].closest('.task').remove()
    arrItems.splice(0, 1)
    localStorage.setItem('items', JSON.stringify(arrItems))
    }
} */

let taskDelete = () => {
  taskList.onclick = (e) => {
    if (e.target.innerText == "×") {
      // ?? скопировал x из консоли, с моим x из клавиатуры не работало
      e.target.closest(".task").remove();
      let delitedItem = arrItems.indexOf(e.target.previousSibling.innerText);
      arrItems.splice(delitedItem, 1);
      localStorage.setItem("items", JSON.stringify(arrItems));
      console.log(arrItems);
    }
  };
};

input.onchange = () => {
  addItem(input.value);
  arrItems.push(input.value);
  input.value = "";
  localStorage.setItem("items", JSON.stringify(arrItems));
  taskDelete();
};

data.forEach((item) => {
  addItem(item);
});

taskDelete();
