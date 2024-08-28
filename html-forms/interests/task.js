
// Получаем все элементы с классом 'interest__check'
const checkElements = document.querySelectorAll('.interest__check');

// Получаем основной элемент с классом 'interests_main'
const interestMain = document.querySelector('.interests_main');

/**
 * Обработчик события изменения чекбокса.
 * @param {Event} event - Событие изменения чекбокса.
 */
const checkBoxChegeHandler = ({ target }) => {
  // Получаем элемент, который был изменен
  const changedElement = target;

  // Получаем родительский чекбокс, если он существует
  let parentCheckBox = changedElement
   .closest('.interests_active')
   ?.closest('.interest')
   .querySelector('input');

  /**
   * Проверяет, является ли текущий элемент последним уровнем вложенности.
   * @returns {boolean} True, если элемент является последним уровнем вложенности, false в противном случае.
   */
  const isLastListLevel = () => {
    return changedElement?.closest('.interest').querySelector('.interests_active') === null;
  };

  /**
   * Устанавливает состояние внутренних чекбоксов в зависимости от состояния текущего элемента.
   */
  const setInnerMark = () => {
    // Получаем все внутренние чекбоксы
    const innerLists = changedElement.parentElement.nextElementSibling.querySelectorAll('.interest__check');
    // Устанавливаем состояние внутренних чекбоксов
    innerLists.forEach((innerList) => {
      innerList.checked = changedElement.checked;
    });
  };

  /**
   * Устанавливает состояние родительских чекбоксов в зависимости от состояния текущего элемента.
   */
  const setMark = () => {
    // Идем по родительским чекбоксам, пока не достигнем корня
    while (parentCheckBox) {
      // Получаем соседние чекбоксы текущего уровня
      const changedElementNeighbors = parentCheckBox
       .closest('.interest')
       .querySelector('.interests_active')
       ?.querySelectorAll('.interest__check');
      // Если соседние чекбоксы существуют, устанавливаем состояние родительского чекбокса
      if (changedElementNeighbors?.length) {
        // Проверяем, все ли соседние чекбоксы отмечены
        const allChecked = Array.from(changedElementNeighbors).every((el) => el.checked);
        // Проверяем, есть ли хотя бы один отмеченный соседний чекбокс
        const someChecked = Array.from(changedElementNeighbors).some((el) => el.checked);
        // Устанавливаем состояние родительского чекбокса
        parentCheckBox.checked = allChecked;
        parentCheckBox.indeterminate = someChecked &&!allChecked;
      }
      // Переходим к следующему родительскому чекбоксу
      parentCheckBox = parentCheckBox
       ?.closest('.interests_active')
       ?.closest('.interest')
       .querySelector('input');
    }
  };

  // Если текущий элемент не является последним уровнем вложенности, устанавливаем состояние внутренних чекбоксов
  if (!isLastListLevel()) setInnerMark();
  // Устанавливаем состояние родительских чекбоксов
  setMark();
};

// Добавляем обработчик события изменения чекбокса ко всем элементам с классом 'interest__check'
checkElements.forEach((checkElement) => {
  checkElement.addEventListener('change', checkBoxChegeHandler);
});