let links = document.querySelectorAll('.has-tooltip')
links.forEach(link => {
    link.insertAdjacentHTML('afterend', `<div class="tooltip">${link.textContent}</div>`)
    let tip = link.nextElementSibling;
    link.onclick = () => {
      let activTips = document.querySelectorAll('.tooltip_active')
      activTips.forEach(activTip => {
        activTip.classList.remove('tooltip_active')
      });

      let XY = link.getBoundingClientRect()
      console.log(XY.left)   
      tip.classList.toggle('tooltip_active');
      tip.style.position = 'absolute';
      tip.style.left =  XY.left + 'px' 
      tip.dataset.position = 'top'
/*       Не понял суть второго задания повышенной сложности 
      дата атрибут добавил и показал что могу как то управлять через него стилями, 
      но нужно ли запилить функционал места появления подсказки типа если top то подсказка сверху? */
      return false
    }

});

