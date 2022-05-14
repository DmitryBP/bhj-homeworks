const controlDec = document.querySelectorAll('.product__quantity-control_dec')
const controlInc = document.querySelectorAll('.product__quantity-control_inc')
const addToCart = document.querySelectorAll('.product__add')
const cart = document.querySelector('.cart__products')
const cartActive = document.querySelector('.cart')



controlDec.forEach(dec => {
  dec.onclick = () => {
    if(dec.nextElementSibling.textContent > 1) {
      dec.nextElementSibling.textContent--
    }
  }
})

controlInc.forEach(inc => {
  inc.onclick = () => {
    inc.previousElementSibling.textContent++
  }
});

addToCart.forEach(addButton => {
  addButton.onclick = () => {
    
    let addedProductId = addButton.closest('.product').getAttribute('data-id')
    let addedProductValue = Number(addButton.previousElementSibling.children[1].textContent)
    let addedProductImgPosition = addButton.closest('.product').children[1].getBoundingClientRect()

    
    let cartProducts = Array.from(cart.children)
    
    let findInCart = cartProducts.find(prod => 
      prod.getAttribute('data-id') == addedProductId
    )
    
    let addedProductIndex = cartProducts.indexOf(findInCart)
    
    if(cartProducts[addedProductIndex]){
      let howMachInCart = Number(cartProducts[addedProductIndex].children[1].textContent) 
      cartProducts[addedProductIndex].children[1].textContent = howMachInCart + addedProductValue

      const cartProductImgPosition = cartProducts[addedProductIndex].children[0].getBoundingClientRect()
      
      console.log('cart.x', cartProductImgPosition.x)
      console.log('cart.y', cartProductImgPosition.y)
    }
    
    if (!findInCart) {
      cart.insertAdjacentHTML('afterbegin', `
      <div class="cart__product" data-id="${addButton.closest('.product').getAttribute('data-id')}">
      <img class="cart__product-image" src="${addButton.closest('.product__controls').previousElementSibling.src}">
      <div class="cart__product-count">${addButton.previousElementSibling.children[1].textContent}</div>
      <button class="cart__delite-product">Удалить</button>
      </div>
      `)
    }
    
    cartActive.classList.add('cart-active')
    
    const cartProductsDelite = cart.querySelector('.cart__delite-product')
    
    cartProductsDelite.onclick = () => {
      cartProductsDelite.closest('.cart__product').remove()
      let arrCart = document.getElementsByClassName('cart__product')
      if(arrCart.length == 0){
        cartActive.classList.remove('cart-active')
      }
    }
    
    
  }
})

