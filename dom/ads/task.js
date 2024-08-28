const cases = document.querySelectorAll('.rotator__case');
console.log(cases);

let index = 0;
function rotateCases() {
  cases.forEach((caseItem) =>
    caseItem.classList.remove('rotator__case_active')
  );
  index = (index + 1) % cases.length;

  cases[index].classList.add('rotator__case_active');
  cases[index].style.color = cases[index].dataset.color
  console.log(cases[index].style);
  speed = Number(cases[index].dataset.speed);

  clearInterval(interval);
  interval = setInterval(rotateCases, speed)
}
let interval = setInterval(rotateCases, 1000);
