// const parentCheck = document.querySelectorAll('div > ul > li > label > input')
const parentCheck1 = document.querySelector('div > ul > li:nth-child(1) > label > input')
const parentCheck2 = document.querySelector('div > ul > li:nth-child(2) > label > input')
const childCheck1 = document.querySelectorAll('div > ul > li:nth-child(1) ul label > input')
const childCheck2 = document.querySelectorAll('div > ul > li:nth-child(2) ul label > input')

console.log(childCheck2)
console.log(parentCheck2)

parentCheck1.addEventListener('click', () => {
  childCheck1.forEach(child1 => {
    child1.checked = !child1.checked
  });
})
parentCheck2.addEventListener('click', () => {
  childCheck2.forEach(child2 => {
    child2.checked = !child2.checked
  });
})
   