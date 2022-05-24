const form = document.querySelector("#signin__form");
const welcome = document.querySelector("#welcome");
const signin = document.querySelector("#signin");
const userId = document.querySelector("#user_id");
const exit = document.querySelector(".exit");

const xhr = new XMLHttpRequest();
xhr.responseType = "json";

const exitBtn = () => {
  exit.onclick = () => {
    localStorage.removeItem("id");
    signin.classList.add("signin_active");
    welcome.classList.remove("welcome_active");
    exit.classList.remove("exit__active");
  };
};

if (localStorage.getItem("id")) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = localStorage.getItem("id");
  exit.classList.add("exit__active");
  exitBtn();
}

form.onsubmit = (e) => {
  const data = new FormData(form);
  e.preventDefault();

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(data);
  xhr.onload = function () {
    if (xhr.response.success == true) {
      console.log(xhr.response.user_id);
      signin.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
      userId.textContent = xhr.response.user_id;
      exit.classList.add("exit__active");
      localStorage.setItem("id", xhr.response.user_id);
      form.reset();
      exitBtn();
    } else {
      alert("Неверный логин/пароль");
    }
  };
};
