const controlInterfaseOfProducts = document.querySelectorAll('.product__quantity');
const cart = document.querySelector('.cart__products');
const cartArr = [];

const productTemplate = (imageUrl, count) => `
<img class="cart__product-image" src="${imageUrl}">

<div class="cart__product-count">${count}</div>
<div class="cart__product-close">&times;</div>
  `;

loadProducts();

controlInterfaseOfProducts.forEach((interfaseProduct) => {
  const decrimentBtn = interfaseProduct.querySelector('.product__quantity-control_dec');
  const incrimentBtn = interfaseProduct.querySelector('.product__quantity-control_inc');
  const addBtn = interfaseProduct.querySelector('.product__add');
  const countElement = interfaseProduct.querySelector('.product__quantity-value');

  const productElement = interfaseProduct.closest('.product');
  const img = productElement.querySelector('.product__image').src;
  const id = productElement.dataset.id;

  incrimentBtn.addEventListener('click', () => {
    incriment(countElement);
  });
  decrimentBtn.addEventListener('click', () => {
    decriment(countElement);
  });
  addBtn.addEventListener('click', () => {
    addToCart(id, countElement, img);
  });
});

function loadProducts() {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.forEach((product) => {
    createCartProduct(product.id, product.countValue, product.img);
  });
}

function incriment(countElement) {
  countElement.textContent++;
}

function decriment(countElement) {
  if (countElement.textContent > 0) {
    countElement.textContent--;
  }
}

function addToCart(id, countElement, img) {
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

function createCartProduct(id, countValue, img) {
  const product = document.createElement('div');
  product.classList.add('cart__product');
  product.dataset.id = id;
  product.innerHTML = productTemplate(img, countValue);
  renderInCart(id, product);

  // Обработка удаления товара из корзины 
  const removeBtn = product.querySelector('.cart__product-close')
  removeBtn.addEventListener('click', removeHandler)

  function removeHandler(){
    // Удаление из корзины
    product.remove()
    // Удаление из памяти
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }
}

function renderInCart(id, product) {
  cart.append(product);
  cartArr.push(id);
}

function saveProduct(id, countValue, img) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push({ id, countValue: countValue, img: img });
  localStorage.setItem('products', JSON.stringify(products));
}

// localStorage.clear()
