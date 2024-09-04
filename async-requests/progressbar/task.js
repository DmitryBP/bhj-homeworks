// let form = document.querySelector('#form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   let xhr = new XMLHttpRequest();
//   let formData = new FormData(form);

//   xhr.upload.onprogress = function (event) {
//     console.log(`Отправлено ${event.loaded} из ${event.total}`);
//     const progress = document.getElementById('progress');
//     progress.value = event.loaded / event.total;
//   };
//   xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
//   xhr.send(formData);
//   xhr.onload = () => console.log(xhr.response);
// });

// fetch

// const form = document.querySelector('#form');
// const formData = new FormData(form);

// form.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   fetch('https://students.netoservices.ru/nestjs-backend/upload', {
//     method: 'POST',
//     body: formData,
//   }).then(response => {
//     if(response.ok){
//       return response.json();
//     } else {
//       console.error('error')
//     }
//   }).then(data => {
//     console.log('Успех', data)
//   }).catch((error) => console.error('Ошибища', error))
// })

// fetch async await

const form = document.querySelector('#form');
const formData = new FormData(form);

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/upload', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Ошибка загрузки ', response.status);
    }
  } catch {
    console.error('Ошибка сети ', response.statusText);
  }
});
