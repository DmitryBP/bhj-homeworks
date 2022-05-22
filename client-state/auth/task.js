const form = document.querySelector('#signin__form')
const login = document.getElementsByClassName('control')[0]
const password = document.getElementsByClassName('control')[1]
const welcome = document.querySelector('#welcome')
const signin = document.querySelector('#signin')
const userId = document.querySelector('#user_id')
const xhr = new XMLHttpRequest()
const exit = document.querySelector('.exit')
const exitBtn = () => {
  exit.onclick = () => {
    localStorage.clear()
    location.reload()
  }
}

if(localStorage.getItem('id')) {
  signin.classList.remove('signin_active')
  welcome.classList.add('welcome_active')
  userId.textContent = localStorage.getItem('id')
  exit.classList.add('exit__active')
  exitBtn()
} else{

  login.onchange = () => {
    login.textContent = login.value
  }
  password.onchange = () => {
    password.textContent = password.value
  }
  
  form.onsubmit = (e) => {
    const data = new FormData(form)
    console.log(form)
    e.preventDefault();
  
    xhr.responseType = 'json'
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
    xhr.send(data)
    xhr.onload = function()
     {
      if (xhr.response.success == true) {
        console.log(xhr.response.user_id);
        signin.classList.remove('signin_active')
        welcome.classList.add('welcome_active')
        userId.textContent = xhr.response.user_id
        exit.classList.add('exit__active')
        localStorage.setItem('id', xhr.response.user_id)
        exitBtn()
      } else {
        alert('Неверный логин/пароль')
      }
    };
  }
}

