import { cart, cartArr } from './addToCart.js';

const productTemplate = (imageUrl, count) => `
<img class="cart__product-image" src="${imageUrl}">
<div class="cart__product-count">${count}</div>
<div class="cart__product-close">&times;</div>
  `;

export function createCartProduct(id, countValue, img) {
  const product = document.createElement('div');
  product.classList.add('cart__product');
  product.dataset.id = id;
  product.innerHTML = productTemplate(img, countValue);
  renderInCart(id, product);

  // Обработка удаления товара из корзины
  const removeBtn = product.querySelector('.cart__product-close');
  removeBtn.addEventListener('click', removeHandler);

  function removeHandler() {
    // Удаление из корзины
    product.remove();
    // Удаление из памяти
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      cartArr.splice(productIndex, 1);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }
}

function renderInCart(id, product) {
  cart.append(product);
  cartArr.push(id);
}
