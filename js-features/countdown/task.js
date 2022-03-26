// Задание №1
console.log("I'm starting");
let timer = document.getElementById("timer");
console.log(timer.textContent);

let interval = setInterval(() => {
  if (timer.textContent > 0) {
    timer.textContent--;
  } else {
    clearTimeout(interval);
    alert("Вы победили в конкурсе");
  }
}, 1000);


