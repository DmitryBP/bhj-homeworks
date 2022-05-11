let links = Array.from(document.getElementsByClassName('has-tooltip'))



links.forEach(link => {
  link.onclick = () => {
    console.log(link.nextElementSibling.className !== 'tooltip')
    if (link.nextElementSibling.className !== 'tooltip') {
      link.insertAdjacentHTML('afterend', `
      <div class="tooltip" style="left: 0; top: 0">
      ${'test'}
      </div>
      `)
    }
    // if(link.nextElementSibling)


    return false
  }
});
