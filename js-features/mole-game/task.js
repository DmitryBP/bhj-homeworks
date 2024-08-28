const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = (index) => {
  let hole = document.getElementById(`hole${index}`);
  return hole;
};

const incrementDead = () => {
  dead.innerText = Number(dead.innerText) + 1;
};

const incrementLost = () => {
  lost.innerText = Number(lost.innerText) + 1;
};

for (let i = 1; i < 10; i++) {
  getHole(i).addEventListener('click', () => {
    if (getHole(i).className.includes('hole_has-mole')) {
      incrementDead();
    } else {
      incrementLost();
    }
    if (dead.innerText === '10') {
      alert('Вы победили');
    }
    if (lost.innerText === '5') {
      alert('Вы проиграли');
    }
    if (dead.innerText === '10' || lost.innerText === '5') {
      dead.innerText = 0;
      lost.innerText = 0;
    }
  });
}
