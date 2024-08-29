import { addToCart } from './func/addToCart.js';
import { loadProducts } from './func/loadProduct.js';
import { animation } from './func/animation.js';

// Загружаем корзину из хранилища
loadProducts();

// Регистрируем обработчики нажатий на кнопки товара
const controlInterfaseOfProducts = document.querySelectorAll('.product__quantity');

controlInterfaseOfProducts.forEach((interfaseProduct) => {
  const decrimentBtn = interfaseProduct.querySelector('.product__quantity-control_dec');
  const incrimentBtn = interfaseProduct.querySelector('.product__quantity-control_inc');
  const addBtn = interfaseProduct.querySelector('.product__add');
  const countElement = interfaseProduct.querySelector('.product__quantity-value');

  const productElement = interfaseProduct.closest('.product');
  const imgElement = productElement.querySelector('.product__image'); // как экспортировать 
  const img = productElement.querySelector('.product__image').src;
  const id = productElement.dataset.id;

  incrimentBtn.addEventListener('click', () => {
    countElement.textContent++;
  });

  decrimentBtn.addEventListener('click', () => {
    if (countElement.textContent > 0) {
      countElement.textContent--;
    }
  });
  addBtn.addEventListener('click', () => {
    addToCart(id, countElement, img);
    animation(imgElement, id, productElement);
  });
});


// localStorage.clear()


