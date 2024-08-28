const btnTop = document.querySelector('.btnTop');
const border = document.querySelector('.border');
const element = document.querySelector('.element');

let index = 0;
const handler = () => {
  const position = element.getBoundingClientRect();
  const { x, y, width, height } = position;
  const elementTop = document.createElement('div');
  elementTop.classList.add('elementTop');
  elementTop.innerHTML = index;

  elementTop.style.position = 'absolute';
  elementTop.style.top = `${y - height+ window.pageYOffset}px`;
  elementTop.style.left = `${x + width +window.pageXOffset}px`;

  border.append(elementTop);
  index++;

  console.log(elementTop, position);
};

btnTop.addEventListener('click', handler);
