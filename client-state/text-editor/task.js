const editor = document.querySelector('#editor')
const clearContent = document.querySelector('#clear-content')
const clearStorage = document.querySelector('#clear-storage')
let text

editor.oninput = () => {
  text = editor.value
  localStorage.setItem('save', text)
}

editor.textContent = localStorage.getItem('save')?localStorage.getItem('save'):''

clearContent.onclick = () => {
  editor.value = ''

}
clearStorage.onclick = () => {
  localStorage.clear()
}