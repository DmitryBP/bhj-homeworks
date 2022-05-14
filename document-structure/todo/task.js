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

input.onchange = () => {
  addItem(input.value);
  arrItems.push(input.value);
  input.value = "";
  localStorage.setItem("items", JSON.stringify(arrItems));
};

data.forEach((item) => {
  addItem(item);
});

taskList.onclick = (e) => {
  if (e.target.closest('.task__remove')) {
    e.target.closest(".task").remove();
    let delitedItem = arrItems.indexOf(e.target.previousSibling.innerText);
    arrItems.splice(delitedItem, 1);
    localStorage.setItem("items", JSON.stringify(arrItems));
  }
};
