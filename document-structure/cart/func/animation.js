import { cart } from './addToCart.js';

export function animation(imgElement, id, productsElement) {
  const start = imgElement.getBoundingClientRect();
  let end = [...cart.children].find((product) => product.dataset.id === id)?.getBoundingClientRect();

  let top = start.y + window.pageYOffset;
  let left = start.left + window.pageXOffset;

  let stepX = (end.x - start.x) / 50;
  let stepY = (end.y - start.y) / 50;
  const clon = imgElement.cloneNode(true);
  clon.style.position = 'absolute';
  productsElement.append(clon);

  function animation() {
    left += stepX;
    top += stepY;
    if (left >= end.x) {
      // Удаляем клонированный элемент после завершения анимации
      clon.remove();
    } else {
      clon.style.cssText += `
           position: absolute;
           top: ${top}px;
           left: ${left}px;
         `;
    }
    requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
}
