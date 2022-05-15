let xhr = new XMLHttpRequest()
let pollAnswers = document.querySelector('.poll__answers')
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send()  
xhr.onload = function() {
  if (xhr.readyState === 4 && xhr.status == '200'){
    let currentPoll = JSON.parse(xhr.responseText) 
    let arrAnswers = currentPoll.data.answers
    console.log(arrAnswers)

    arrAnswers.forEach(answer => {
      pollAnswers.insertAdjacentHTML('afterbegin', `
      <button class="poll__answer">
        ${answer}
      </button>
      `)
    });
 
    let anyButton = pollAnswers.querySelectorAll('.poll__answer')
    anyButton.forEach(element => {
      element.onclick = () => {
        alert('Спасибо, ваш голос засчитан!')
    };
    })
  }
};

