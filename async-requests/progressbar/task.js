let form = document.querySelector('#form')
let fileInput = document.querySelector('#file')
let send = document.querySelector('#send')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('test')
  let xhr = new XMLHttpRequest()  
  let formData = new FormData(form)
  
  xhr.upload.onprogress = function(event) {
    console.log(`Отправлено ${event.loaded} из ${event.total}`);
    const progress = document.getElementById( 'progress' );
    progress.value = event.loaded/event.total;
  }
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
  xhr.send(formData)
})



