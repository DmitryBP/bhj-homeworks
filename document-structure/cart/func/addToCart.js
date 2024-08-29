import { createCartProduct } from './createCartProduct.js';

export const cart = document.querySelector('.cart__products');
export const cartArr = [];

export function addToCart(id, countElement, img) {
  const countValue = countElement.textContent.trim();
  if (cartArr.includes(id)) {
    increaseCountInCart(id, countValue);
  } else {
    createCartProduct(id, countValue, img);
    saveProduct(id, countValue, img);
  }

  countElement.textContent = 1;
}

function increaseCountInCart(id, countValue) {
  const cartProduct = [...cart.children].find((product) => product.dataset.id === id);

  if (cartProduct) {
    // Изменяем количесво товара в корзине
    const countInCartElement = cartProduct.querySelector('.cart__product-count');
    countInCartElement.textContent = parseInt(countInCartElement.textContent) + parseInt(countValue);

    // Изменяем количесво товара в хранилище
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products[productIndex].countValue = parseInt(products[productIndex].countValue) + parseInt(countValue);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }
}

function saveProduct(id, countValue, img) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push({ id, countValue: countValue, img: img });
  localStorage.setItem('products', JSON.stringify(products));
}
