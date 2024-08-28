let timerElement = document.getElementById('timer');
let gift = document.getElementById('gift')


let timeArr = timerElement.innerText.split(':');
let hh = +timeArr[0];
let mm = +timeArr[1];
let ss = +timeArr[2];
let ms = 100;
console.log(hh);
let interval = setInterval(() => {
  if (ss === 0) {
    ss = 59;
    if (mm === 0) {
      mm = 59;
      if (hh === 0) {
        hh = 23;
      } else {
        hh--;
      }
    } else {
      mm--;
    }
  } else {
    ss--;
  }
  if (hh === 0 && mm === 0 && ss === 0) {
    gift.click()
    alert('Вы победили в конкурсе!');
    clearInterval(interval);
  }

  timerElement.innerText = `${hh < 10 ? '0' + hh : hh}:${
    mm < 10 ? '0' + mm : mm
  }:${ss < 10 ? '0' + ss : ss}`;
}, ms);
