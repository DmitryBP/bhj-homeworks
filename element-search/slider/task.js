const sliderArrow = document.querySelectorAll('.slider__arrow');
const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const dotsBlock = document.querySelector('.slider__dots');
const dots = dotsBlock.querySelectorAll('.slider__dot');

let currentIndex = 0;
slider.activDotIndex = 0;

const dotHandler = (dot, index) => {
  dots[currentIndex].classList.remove('slider__dot_active');
  slides[currentIndex].classList.remove('slider__item_active');
  dot.classList.add('slider__dot_active');
  slides[index].classList.add('slider__item_active');
  currentIndex = index;
};

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => dotHandler(dot, index));
});

const arrowHandler = (event) => {
  const targetArrow = event.target;
  const isRightArrow = targetArrow === rightArrow;
  const isLeftArrow = targetArrow === leftArrow;

  if (isRightArrow || isLeftArrow) {
    const direction = isRightArrow ? 1 : -1;
    currentIndex = (currentIndex + direction) % slides.length;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
      slide.classList.remove('slider__item_active');
      dots[index].classList.remove('slider__dot_active');
    });
    slides[currentIndex].classList.add('slider__item_active');
    dots[currentIndex].classList.add('slider__dot_active');
  }
};

sliderArrow.forEach((arrow) => {
  arrow.addEventListener('click', arrowHandler);
});

// Процесс реализации
// Установите обработчики события click на элементах «Влево» и «Вправо»
// При смене слайдов учитывайте, что навигация должна быть бесконечной. То есть, смена крайнего левого слайда должна перекидывать к крайнему правому и наоборот.
// В решении старайтесь делать разделение кода. Регистрация обработчиков отдельно, управление слайдером отдельно.
