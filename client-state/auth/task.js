const form = document.querySelector('#signin__form');
const inputElements = form.querySelectorAll('.control');
const welcomeElement = document.querySelector('#welcome');
const signin = form.closest('#signin');
let message;

const changeSigninToWelcome = () => {
  welcomeElement.classList.add('welcome_active');
  signin.classList.remove('signin_active');
};

const addCloseBtn = () => {
  const close = document.createElement('div');
  close.classList.add('close');
  close.style.marginTop = '30px';
  close.innerHTML = `<button class="btn" >Выйти</button>`;
  welcomeElement.append(close);
  close.addEventListener('click', closeHandler);
};

const closeHandler = () => {
  const close = document.querySelector('.close');
  close.remove();
  signin.classList.add('signin_active');
  welcomeElement.classList.remove('welcome_active');
  localStorage.removeItem('userId');
};

const setUserId = (dataSource) => {
  const userIdElement = welcomeElement.querySelector('#user_id');
  userIdElement.textContent = dataSource;
};

const showWelcome = (dataSource) => {
  changeSigninToWelcome();
  addCloseBtn();
  setUserId(dataSource);
};

const showMessage = () => {
  message = document.createElement('div');
  message.classList.add('message');
  message.textContent = '«Неверный логин/пароль»';
  form.append(message);
  form.oninput = () => {
    message.remove();
  };
};

const clearInputs = () => inputElements.forEach((input) => (input.value = ''));

//////////////
// XHR version
//////////////

// const processData = (xhr) => {
//   try {
//     const data = JSON.parse(xhr.responseText);
//     if (data.success) {
//       changeSigninToWelcome();
//       showWelcome(data.user_id);
//       localStorage.setItem('userId', data.user_id);
//     } else {
//       if (!form.contains(message)) {
//         showMessage();
//       }
//     }
//   } catch (error) {
//     console.error('Error processing response:', error);
//   }
// };

// const formSubmitHandler = (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
//   xhr.onload = () => processData(xhr);
//   xhr.onerror = () => console.error('Network error');
//   xhr.send(formData);

//   clearInputs();
// };

////////////////
// FETCH version
////////////////

// const responseHendler = (response) => {
//   if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error('Network response was not ok');
//   }
// };

// const processData = (data) => {
//   if (data && data.success) {
//     changeSigninToWelcome();
//     showWelcome(data.user_id);
//     localStorage.setItem('userId', data.user_id);
//   } else {
//     if (!form.contains(message)) {
//       showMessage();
//     }
//   }
// };

// const formSubmitHandler = (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   fetch('https://students.netoservices.ru/nestjs-backend/auth', {
//     method: 'POST',
//     body: formData,
//   })
//     .then(responseHendler)
//     .then(processData)
//     .catch((error) => console.error('There was a problem with the fetch operation:', error));

//     clearInputs();
// };

////////////////////////////
// FETCH async await version
////////////////////////////

const fetchData = (formData) => {
  return fetch('https://students.netoservices.ru/nestjs-backend/auth', { 
    method: 'POST',
    body: formData,
  });
};

const handleErrorMesage = () => {
  if (!form.contains(message)) {
    showMessage();
  }
};

const handleResponse = async (response) => {
  if (response.ok) {
    const data = await response.json(); 
    if (data && data.success) {
      changeSigninToWelcome();
      showWelcome(data.user_id);
      localStorage.setItem('userId', data.user_id);
    } else {
      handleErrorMesage();
    }
  } else {
    throw new Error('Network response was not ok');
  }
};

const formSubmitHandler = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetchData(formData); 
    await handleResponse(response); 
  } catch(error) {
    console.error('Сервер не отвечает ', error)
  }

  clearInputs();
};

// Читаем память
if (localStorage.getItem('userId')) {
  showWelcome(localStorage.getItem('userId'));
}
// Ждем отправку формы
form.addEventListener('submit', formSubmitHandler);
