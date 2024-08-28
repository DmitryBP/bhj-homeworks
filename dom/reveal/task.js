const reveals = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
reveals.forEach((reveal) => {
    const { top, bottom } = reveal.getBoundingClientRect();
    console.log(top, bottom);
    if (top < window.innerHeight - 200 && bottom > 200) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
});
