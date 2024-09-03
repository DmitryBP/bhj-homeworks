const pollAnswersElement = document.querySelector('.poll__answers');
const pollTitleElement = document.querySelector('.poll__title');
const url = 'https://students.netoservices.ru/nestjs-backend/poll';

const loadData = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    const { id } = data;
    const { title, answers } = data.data;

    pollTitleElement.textContent = title;
    renderAnswers(id, answers);
  } catch (error) {
    console.error(error);
  }
};

const renderAnswers = (id, answers) => {
  answers.forEach((answer) => {
    pollAnswersElement.insertAdjacentHTML('beforeend', ` <button class="poll__answer">${answer}</button> `);
  });

  const answerBtnElements = document.querySelectorAll('.poll__answer');
  answerBtnElements.forEach((btn, index) => {
    const btnIndex = index;
    btn.addEventListener('click', () => {
      responseHandler(id, btnIndex);
    });
  });
};

const responseHandler = async (id, btnIndex) => {
  alert ('Ваш ответ принят');
  const params = new URLSearchParams({ vote: id, answer: btnIndex }).toString();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const data = await response.json();

    renderStat(data.stat);
  } catch (error) {
    console.error(error);
  }
};

const renderStat = (stat) => {
  const poll = pollAnswersElement.closest('.poll');
  const statStr = stat.map((el) => `<div>${el.answer}: <b>${el.votes}</b></div>`).join(' ');
  pollAnswersElement.remove();
  poll.innerHTML += statStr;
};

loadData(url);
