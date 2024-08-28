// Напишите код для случая, когда на странице может быть более 1 навигационного меню.
// Находим все меню на странице
const menus = document.querySelectorAll('.menu_main');

// Для каждого меню реализуем код
menus.forEach((menu) => {
  //все пункты меню
  const menuLinks = menu.querySelectorAll('.menu__link');

  //вешаем обработчик кликов на каждую ссылку меню
  menuLinks.forEach((link) => {
    link.addEventListener('click', clickLinkHandler);
  });

  // Прописываем обработчик для кликов по ссылкам
  function clickLinkHandler(event) {
    // если после ссылки есть элемент
    if (this.nextElementSibling) {
      // запрещаем переход поссылке
      event.preventDefault();
      //регистрируем активные меню
      const openMenuEl = document.querySelectorAll('.menu_active');

      // Одновременно не должно быть открыто более одного вложенного меню. Все остальные должны быть скрыты
      // У каждого активного меню удаляем класс menu_active
      openMenuEl.forEach((menu) => menu.classList.remove('menu_active'));
      // По клику добавляем класс если его нет и удаляем если он уже есть
      this.nextElementSibling.classList.toggle('menu_active');
    }
  }
});

