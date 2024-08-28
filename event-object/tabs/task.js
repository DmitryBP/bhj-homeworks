const tabs = document.querySelectorAll('.tabs');
tabs.forEach((tab) => {
  const links = tab.querySelectorAll('.tab');
  const tabsContent = tab.querySelectorAll('.tab__content');

  let currentIndex = 0;
  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      links[currentIndex].classList.remove('tab_active');
      link.classList.add('tab_active');
      tabsContent[currentIndex].classList.remove('tab__content_active');
      tabsContent[index].classList.add('tab__content_active');
      currentIndex = index;
    });
  });
});
