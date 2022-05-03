const productQuantityValue = document.querySelectorAll(
  ".product__quantity-value"
);
const productQuantityDec = document.querySelectorAll(
  ".product__quantity-control_dec"
);
const productQuantityInc = document.querySelectorAll(
  ".product__quantity-control_inc"
);
const cartBtn = document.querySelectorAll(".product__add");
const cart = document.querySelector(".cart__products");
const img = document.querySelectorAll(".product__image");

productQuantityInc.forEach((el, i) => {
  el.onclick = () => {
    productQuantityValue[i].textContent++;
  };
});

productQuantityDec.forEach((el, i) => {
  el.onclick = () => {
    if (productQuantityValue[i].textContent > 1)
      productQuantityValue[i].textContent--;
  };
});
let arr = [];
cartBtn.forEach((el, i) => {
  el.onclick = () => {
    if (!arr.includes(String(i + 1))) {
      cart.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="cart__product" data-id="${el
        .closest(".product")
        .getAttribute("data-id")}">
      <img class="cart__product-image" src="${img[i].src}">
      <div class="cart__product-count">${
        productQuantityValue[i].textContent
      }</div>
      </div>
      `
      );
      arr.push(el.closest(".product").getAttribute("data-id"));
    } else {
      const cartProductCount = document.querySelectorAll(
        ".cart__product-count"
      );
      cartProductCount.forEach(el => {
        if (el.closest(".cart__product").getAttribute("data-id") == i + 1) {
          let a = Number(el.textContent);
          let b = Number(productQuantityValue[i].textContent);
          el.textContent = a + b;
        }
      });
    }
  };
});
