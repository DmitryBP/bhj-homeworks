
const dropdownAll = document.querySelectorAll('.dropdown')

dropdownAll.forEach((dropdown)=>{
  const dropdBtn = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const links = list.querySelectorAll('.dropdown__link');
  
  dropdBtn.addEventListener('click', (event) => {
    list.classList.toggle('dropdown__list_active');
  });
  
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dropdBtn.innerText = link.innerText;
      list.classList.remove('dropdown__list_active')
    });
  });
})

document.addEventListener('click', (event) => {
  console.log(event.target);
  dropdownAll.forEach((dropdown) => {
    const list = dropdown.querySelector('.dropdown__list');
    const dropdBtn = dropdown.querySelector('.dropdown__value');
    if (event.target!== dropdBtn &&!list.contains(event.target)) {
      list.classList.remove('dropdown__list_active');
    }
  });
})