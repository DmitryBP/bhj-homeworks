// Задание №1
// console.log("I'm starting");
// let timer = document.getElementById("timer");
// let interval = setInterval(() => {
//   if (timer.textContent > 0) {
//     timer.textContent--;
//   } else {
//     clearTimeout(interval);
//     alert("Вы победили в конкурсе");
//   }
// }, 1000);

// Задание №1.1

let timer = document.getElementById("timer");
let link = document.getElementById("link");
console.log(link)
let hh, mm, ss;
timer.textContent = `${(hh = 00)}:${(mm = 00)}:${(ss = 05)}`;

let dozenCondition = () => {
  if (mm >= 10 && ss < 10) {
    timer.textContent = `0${hh}:${mm}:0${ss}`;
  } else if (mm < 10 && ss >= 10) {
    timer.textContent = `0${hh}:0${mm}:${ss}`;
  } else if (mm < 10 && ss < 10) {
    timer.textContent = `0${hh}:0${mm}:0${ss}`;
  } else {
    timer.textContent = `0${hh}:${mm}:${ss}`;
  }
};
let secondTimer = () => {
  let interval = setInterval(() => {
    if (ss > 0) {
      ss--;
      dozenCondition();
    } else if (mm > 0) {
      mm--;
      ss = 59;
      dozenCondition();
    } else if (hh > 0) {
      hh--;
      mm = 59;
      ss = 59;
      dozenCondition();
    } else if (hh == 0 && mm == 0 && ss == 0) {
      clearInterval(interval);
      link.click()
      // alert("Вы победили в конкурсе");
      // window.location = 'ds.cdn15.deliciouspeaches.com'
    }
  }, 1000);
};

secondTimer();
