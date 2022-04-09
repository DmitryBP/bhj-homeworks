let button = document.querySelector('.dropdown__value')
let list = document.querySelector('.dropdown__list')
let listItems = document.querySelectorAll('.dropdown__link')
button.onclick = () => {
list.classList.toggle('dropdown__list_active')
}
listItems.forEach(listItem => {
listItem.onclick = () => {
button.textContent = listItem.textContent
list.classList.remove('dropdown__list_active')
return false
}
});