let book = document.querySelector(".book");
let size = document.querySelectorAll(".font-size");
let colorText = document.querySelectorAll('[data-text-color]')
let colorFon = document.querySelectorAll('[data-bg-color]')

size.forEach((el) => {
  el.onclick = function () {
    size.forEach((el) => {
      el.classList.remove("font-size_active");
    });
    el.classList.add("font-size_active");
    if(el.classList.contains('font-size_small')){
      book.classList.remove('book_fs-big')
      book.classList.add('book_fs-small')
    } else if (el.classList.contains('font-size_big')) {
      book.classList.remove('book_fs-small')
      book.classList.add('book_fs-big')
    } else {
      book.classList.remove('book_fs-small')
      book.classList.remove('book_fs-big')
    }
    return false;
  };
});
console.log(colorFon)

colorText.forEach((el) => {
  el.onclick = function () {
    colorText.forEach((el) => {
      el.classList.remove("color_active");
    });
    el.classList.add("color_active");
    if(el.classList.contains('text_color_black')){
      book.classList.remove('book_color-gray')
      book.classList.remove('book_color-whitesmoke')
      book.classList.add('book_color-black')
    } else if (el.classList.contains('text_color_gray')) {
      book.classList.remove('book_color-whitesmoke')
      book.classList.remove('book_color-black')
      book.classList.add('book_color-gray')
    } else {
      book.classList.remove('book_color-black')
      book.classList.remove('book_color-gray')
      book.classList.add('book_color-whitesmoke')
    }
    return false;
  };
});

colorFon.forEach((el) => {
  el.onclick = function () {
    colorFon.forEach((el) => {
      el.classList.remove("color_active");
    });
    el.classList.add("color_active");
    if(el.classList.contains('bg_color_black')){
      book.classList.remove('book_bg-gray')
      book.classList.remove('book_bg-whitesmoke')
      book.classList.add('book_bg-black')
    } else if (el.classList.contains('bg_color_gray')) {
      book.classList.remove('book_bg-whitesmoke')
      book.classList.remove('book_bg-black')
      book.classList.add('book_bg-gray')
    } else {
      book.classList.remove('book_bg-black')
      book.classList.remove('book_bg-gray')
      book.classList.add('book_bg-whitesmoke')
    }
    return false;
  };
});