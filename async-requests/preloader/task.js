const LOADER_ELEMENT = document.querySelector('#loader');
let itemsElement = document.querySelector('#items');

const CASH_PARAMETERS = {
  text: 'Загружено из Кэш',
  color: 'red',
};

const SERVER_PARAMETERS = {
  text: 'Загружено c сервера',
  color: 'green',
};

const itemTemplate = (valuteName, value) => {
  return `
    <div class="item__code">${valuteName}</div>
    <div class="item__value">${value}</div>
    <div class="item__currency">руб.</div>
  `;
};

const toggleLoader = () => {
  LOADER_ELEMENT.classList.remove('loader_active');
};

const loadSavedValute = async () => {
  try {
    const savedValute = JSON.parse(localStorage.getItem('valute'));
    if (savedValute) {
      toggleLoader();
      renderCurses(CASH_PARAMETERS, savedValute);
    }
  } catch (error) {
    console.error(error);
  }
};

const fetchValute = async () => {
  try {
    const xhr = new XMLHttpRequest();
    const URL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

    xhr.open('GET', URL);
    xhr.send();
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      const valute = data.response.Valute;

      toggleLoader();
      itemsElement.remove();
      const newItemsElement = document.createElement('div');
      document.querySelector('.card>h1').after(newItemsElement);
      itemsElement = newItemsElement;
      localStorage.setItem('valute', JSON.stringify(valute));
      renderCurses(SERVER_PARAMETERS, valute);
    };
  } catch (error) {
    console.error(error);
  }
};

const renderCurses = (props, valute) => {
  createHeader(props);
  createValuteItem(valute);
};

const createHeader = (props) => {
  const header = document.createElement('div');
  header.textContent = props.text;
  header.style.color = props.color;
  itemsElement.append(header);
};

const createValuteItem = (valute) => {
  Object.keys(valute).forEach((key) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = itemTemplate(key, valute[key].Value);
    itemsElement.append(item);
  });
};

// Initialization
loadSavedValute();
fetchValute();
