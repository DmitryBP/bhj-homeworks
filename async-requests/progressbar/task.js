let form = document.querySelector('#form')
let formData = new FormData(form)
let send = document.querySelector('#send')


send.onclick = () => {
  let xhr = new XMLHttpRequest()  
  console.log('test')
  
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
  xhr.send(formData)
  
  xhr.upload.onloadstart = function(event) {
    console.log(`Отправлено ${event.loaded} из ${event.total}`);
    console.log(`test`);
  
};

  return false
}





const progress = document.getElementById( 'progress' );
// progress.value = 0.7;