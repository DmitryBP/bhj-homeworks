const pollTitleElement = document.querySelector('#poll__title');
const pollAnswersElement = document.querySelector('#poll__answers');
let pollId;

const url = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

// const xhr = fetch(url)
addAnswersToDom = (pollAnswersArr) => {
  pollAnswersArr.forEach((_, index) => {
    const answerElement = document.createElement('button');
    answerElement.innerText = pollAnswersArr[index];
    answerElement.classList.add('poll__answer');
    answerElement.style.marginRight = '10px';
    pollAnswersElement.append(answerElement);
    answerElement.addEventListener('click', answerHandler);
  });
};

xhr.onload = () => {
  const response = JSON.parse(xhr.response);
  const pollTitleText = response.data.title;
  const pollAnswersArr = response.data.answers;
  pollId = response.id.toString();

  pollTitleElement.textContent = pollTitleText;
  addAnswersToDom(pollAnswersArr);
};

const answerHandler = (event) => {
  alert('Спасибо, ваш голос засчитан!');
  const answerIndex = [...pollAnswersElement.children].indexOf(event.target);
  const card = pollAnswersElement.closest('.card');
  pollAnswersElement.remove();

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  const params = new URLSearchParams({ vote: pollId, answer: answerIndex }).toString();
  xhr.send(params);

  xhr.onload = () => {
    const statResultsArr = JSON.parse(xhr.response).stat;
    const result = document.createElement('div');
    card.append(result);
    result.innerHTML += statResultsArr
      .map((result) => {
        return ` <div>${result.answer}:  <b>${result.votes}</b></div>`;
      })
      .join(' ');
  };
};
