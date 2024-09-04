const editor = document.querySelector('#editor');
const btn = document.querySelector('.btn');

if (localStorage.getItem('text')) {
  editor.value = JSON.parse(localStorage.getItem('text'));
}

const handler = () => {
  const text = editor.value;
  localStorage.setItem('text', JSON.stringify(text));
};

const clearHandler = () => {
  editor.value = '';
  handler();
};

editor.addEventListener('input', handler);
btn.addEventListener('click', clearHandler);
