let xhr = new XMLHttpRequest()
let items = document.querySelector('#items')
let img = document.querySelector('.loader')

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.send()

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    img.classList.remove('loader_active')
    for (let key in myObj.response.Valute) {
      items.insertAdjacentHTML('afterbegin', `
      <div class="item">
          <div class="item__code">
            ${key}
          </div><div class="item__value">
            ${myObj.response.Valute[key].Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>
      `)
    }
  }
};

