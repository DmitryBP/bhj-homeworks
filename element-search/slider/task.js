let left = document.querySelector(".slider__arrow_prev");
let right = document.querySelector(".slider__arrow_next");
let images = Array.from(document.querySelectorAll(".slider__item"));
let i = 0;

// let rightFunction = () => {
//   if (i < images.length - 1) {
//     images[i].classList.remove("slider__item_active");
//     images[i + 1].classList.add("slider__item_active");
//     i++;
//   } else {
//     images[i].classList.remove("slider__item_active");
//     i = 0;
//     images[i].classList.add("slider__item_active");
//   }
// };

// let leftFunction = () => {
//   console.log(`test111 ${i}`);
//   if (i > 0) {
//     images[i].classList.remove("slider__item_active");
//     images[i - 1].classList.add("slider__item_active");
//     i--;
//     console.log(`if left ${i}`);
//   } else {
//     images[images.length - 1].classList.remove("slider__item_active");
//     i = images.length - 1;
//     images[i].classList.add("slider__item_active");
//     console.log(`else left ${i}`);
//   }
// };

// right.onclick = rightFunction;

// left.onclick = leftFunction;
// console.log(`test ${i}`);

//Вторая версиясв 

let toglLeft = () => {
  activSlaid = images.findIndex((item) =>
    item.classList.contains("slider__item_active")
  );
  images[activSlaid].classList.remove("slider__item_active");
  if (activSlaid == 0) {
    images[4].classList.add("slider__item_active");
  } else {
    images[activSlaid - 1].classList.add("slider__item_active");
  }
};
let toglRight = () => {
  activSlaid = images.findIndex((item) =>
    item.classList.contains("slider__item_active")
  );
  images[activSlaid].classList.remove("slider__item_active");
  if (activSlaid == 4) {
    images[0].classList.add("slider__item_active");
  } else {
    images[activSlaid + 1].classList.add("slider__item_active");
  }
};
left.onclick = () => {
  toglLeft();
};
right.onclick = () => {
  toglRight()
}
