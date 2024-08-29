import { createCartProduct } from './createCartProduct.js';

export function loadProducts() {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.forEach((product) => {
    createCartProduct(product.id, product.countValue, product.img);
  });
}
