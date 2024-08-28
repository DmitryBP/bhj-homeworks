const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
const timerElement = document.getElementById('clicker__timer');

let lastClickTime = 0;
let previousClickTime = 0;

const handler = () => {
  counterElement.innerText++;
  previousClickTime = lastClickTime;
  lastClickTime = new Date().getTime();

  if (cookieElement.width === 200) {
    cookieElement.width = 100;
  } else {
    cookieElement.width = 200;
  }
  if (counterElement.innerText > 1) {
    const timeDifference = (lastClickTime - previousClickTime) / 1000;
    timerElement.innerText =   (1 / timeDifference).toFixed(0);
  }
};

cookieElement.addEventListener('click', handler);
