// Получаем элементы чата
const widgetElement = document.querySelector('.chat-widget');
const inputElement = widgetElement.querySelector('#chat-widget__input');
const messagesElement = widgetElement.querySelector('#chat-widget__messages');

// Объект с ответами
const answeres = {
  0: 'Я занят',
  1: 'Не хочу говорить',
  2: 'Это бесполезный разговор',
  3: 'Ну сколько можно',
  4: 'Напишите завтра',
};

// Функция, возвращающая текущее время
const getTime = () => {
  return new Date().toLocaleTimeString('ru-Ru', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Функция, прокручивающая сообщения до последнего
const scrollToLastMessage = () => {
  const lastMessage = messagesElement.lastElementChild;
  lastMessage.scrollIntoView({ behavior: 'smooth' });
};

// Переменная для таймаута
let chatTimeout;

// Функция, отправляющая сообщение через 30 секунд бездействия
const chatTimeoutFunc = () => {
  chatTimeout = setTimeout(() => {
    // Добавляем сообщение
    messagesElement.insertAdjacentHTML('beforeend', `<div class="message">
      <div class="message__time">${getTime()}</div>
      <div class="message__text">Ты сюда помолчать пришел?</div>
    </div>`);
    // Прокручиваем сообщения до последнего
    scrollToLastMessage();
  }, 30000);
};

// Функция, возвращающая случайный ответ
const answer = () => {
  return answeres[Math.floor(Math.random() * Object.keys(answeres).length)];
};

// Флаг, указывающий, был ли уже задан вопрос
let isAsked = false;

// Обработчик клика на чат
widgetElement.addEventListener('click', () => {
  // Добавляем класс активности
  widgetElement.classList.add('chat-widget_active');
  // Если вопрос еще не был задан, задаем его
  if (!isAsked) {
    chatTimeoutFunc();
    isAsked = true;
  }
});

// Обработчик отправки сообщения
const sendMessage = (event) => {
  // Если нажата клавиша Enter
  if (event.key === 'Enter') {
    // Очищаем таймаут
    clearTimeout(chatTimeout);
    // Получаем текст сообщения
    const messageText = event.target.value.trim();
    // Если сообщение не пустое
    if (messageText) {
      // Добавляем сообщение
      messagesElement.insertAdjacentHTML('beforeend', `<div class="message message_client">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">${messageText}</div>
      </div>`);
      // Прокручиваем сообщения до последнего
      scrollToLastMessage();
      // Очищаем поле ввода
      inputElement.value = '';
      // Отправляем ответ через 1,5 секунды
      setTimeout(() => {
        messagesElement.insertAdjacentHTML('beforeend', `<div class="message">
          <div class="message__time">${getTime()}</div>
          <div class="message__text">${answer()}</div>
        </div>`);
        scrollToLastMessage();
      }, 1500);
    }
    // Задаем вопрос через 30 секунд бездействия
    chatTimeoutFunc();
  }
};

// Добавляем обработчик отправки сообщения
inputElement.addEventListener('keydown', sendMessage);
