const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal__content');
const closeButton = modal.querySelector('.modal__close');
const isFirstVizit = getCookie('isFirstVizit');

if (!isFirstVizit) {
  modal.classList.add('modal_active');
  setCookie('isFirstVizit', 'false', 30);
  document.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target) || e.target === closeButton) {
      modal.classList.remove('modal_active');
    }
  });
}

//Функция для установки cookie:
function setCookie(name, value, days) {
  // для удаления куки устанавливается отрицательный параметр day (-1)
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

//Функция для получения cookie:
function getCookie(name) {
  return document.cookie.split('; ').reduce((r, c) => {
    const [key, ...v] = c.split('=');
    return key === name ? decodeURIComponent(v.join('=')) : r;
  }, '');
}

// Очистка куки
// setCookie('isFirstVizit', 'false', -1);
