const book = document.getElementById('book');
const sizeLinks = document.querySelectorAll('.font-size');
const textColorLinks = document.querySelectorAll('.book__control_color .color');
const bgColorLinks = document.querySelectorAll(
  '.book__control_background .color'
);

const sizeActiveClass = 'font-size_active';
const colorActiveClass = 'color_active';

const smallFontSizeClass = 'font-size_small';
const bigFontSizeClass = 'font-size_big';

const bigClass = 'book_fs-big';
const smallClass = 'book_fs-small';

const bgBookBlackClass = 'book_bg-black';
const bgBookGrayClass = 'book_bg-gray';
const bgBookWhiteClass = 'book_bg-white';

const textBookBlackClass = 'book_color-black';
const textBookGrayClass = 'book_color-gray';
const textBookWhiteClass = 'book_color-whitesmoke';

const classMap = {
  small: smallClass,
  big: bigClass,
  black: bgBookBlackClass,
  gray: bgBookGrayClass,
  white: bgBookWhiteClass,
  blackText: textBookBlackClass,
  grayText: textBookGrayClass,
  whitesmokeText: textBookWhiteClass,
};

const getTargetClass = (link) => {
  const { size, bgColor, textColor } = link.dataset;
  if (size) return classMap[size];
  if (bgColor) return classMap[bgColor];
  if (textColor) return classMap[`${textColor}Text`];
};

const getActiveLink = (optionLinks, optionActiveClass) => {
  return Array.from(optionLinks).find((link) =>
    link.classList.contains(optionActiveClass)
  );
};

const optionsHandler = (event, optionLinks, optionActiveClass, ...classes) => {
  event.preventDefault();
  const activeLink = getActiveLink(optionLinks, optionActiveClass);
  const clickedLink = event.target;

  if (clickedLink !== activeLink) {
    activeLink.classList.remove(optionActiveClass);
    clickedLink.classList.add(optionActiveClass);
  }

  book.classList.remove(...classes);
  const targetClass = getTargetClass(clickedLink);
  if (targetClass) {
    book.classList.add(targetClass);
  }
};

sizeLinks.forEach((size) => {
  size.addEventListener('click', (event) =>
    optionsHandler(event, sizeLinks, sizeActiveClass, bigClass, smallClass)
  );
});

textColorLinks.forEach((textColorLink) => {
  textColorLink.addEventListener('click', (event) =>
    optionsHandler(
      event,
      textColorLinks,
      colorActiveClass,
      textBookBlackClass,
      textBookGrayClass,
      textBookWhiteClass
    )
  );
});

bgColorLinks.forEach((bgColorLink) => {
  bgColorLink.addEventListener('click', (event) =>
    optionsHandler(
      event,
      bgColorLinks,
      colorActiveClass,
      bgBookGrayClass,
      bgBookBlackClass,
      bgBookWhiteClass
    )
  );
});
