const container = document.querySelector(".chat-widget__messages");
const chatWidget = document.querySelector(".chat-widget");
const message = document.querySelector(".message");
const messages = document.querySelector(".chat-widget__messages");
const chatInput = document.querySelector(".chat-widget__input");

let time = new Date();

let response = {
  1: "Не буду отвечать! Вы еще ничего не купили",
  2: "Заходите завтра",
  3: "Возвращайтесь с деньгами",
  4: "Кто тут?",
};

let responseX = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

let firstMassage = () => {
  let flag = true
  chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
    if (messages.innerHTML == false && flag == true) {
        setTimeout(() => {
          messages.innerHTML += `
          <div class="message">
          <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
          <div class="message__text">
          Так и будем молчать!!!!???
          </div>
          </div>
          `;
      }, 2000);
    }
    flag = false
  });
}

firstMassage()

chatInput.addEventListener("keydown", function (e) {
  if (e.code == "Enter" && chatInput.value != false) {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
      <div class="message__text">
        ${chatInput.value}
      </div>
    </div>
    `;
    chatInput.value = "";
    setTimeout(() => {
      messages.innerHTML += `
      <div class="message">
        <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
        <div class="message__text">
        ${response[responseX(1, 4)]}
        </div>
      </div>
      `;
      container.scrollIntoView(false);
    }, 1500);
  }
});
