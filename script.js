const parentSlider = document.querySelector(".slider-container");
const childSlider = document.querySelector(".slider");

let pressed = false;
let startX, x;
const handleUserMouse = (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;
  childSlider.style.left = `${x - startX}px`;
  console.log(e.offsetX);
};
parentSlider.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - childSlider.offsetLeft;

  parentSlider.style.cursor = "grabbing";
});
parentSlider.addEventListener("mouseenter", () => {
  parentSlider.style.cursor = "grab";
});

window.addEventListener("mouseleave", () => {
  parentSlider.style.cursor = "default";
});
parentSlider.addEventListener("mouseup", () => {
  parentSlider.style.cursor = "grab";
});
window.addEventListener("mouseup", () => {
  pressed = false;
});
parentSlider.addEventListener("mousemove", handleUserMouse);

// // slider card from Conor Bailey
// const sdSliderContainer = document.querySelector(".slider-container");
// const sdSlider = document.querySelector(".slider");

// let pressed = false;
// let startx;
// let x;

// // mouse event
// sdSliderContainer.addEventListener("mousedown", (e) => {
//   pressed = true;
//   startx = e.offsetX - sdSlider.offsetLeft;
//   sdSliderContainer.style.cursor = "grabbing";
// });
// sdSliderContainer.addEventListener("mouseenter", () => {
//   sdSliderContainer.style.cursor = "grab";
// });
// sdSliderContainer.addEventListener("mouseup", () => {
//   sdSliderContainer.style.cursor = "grab";
// });
// window.addEventListener("mouseup", () => {
//   pressed = false;
// });
// sdSliderContainer.addEventListener("mousemove", (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX;

//   sdSlider.style.left = `${x - startx}px`;

//   checkboundary();
// });

// // touch event
// sdSliderContainer.addEventListener("touchstart", (e) => {
//   pressed = true;
//   startx = e.touches[0].clientX - sdSlider.offsetLeft;
// });

// window.addEventListener("touchend", () => {
//   pressed = false;
// });
// sdSliderContainer.addEventListener("touchmove", (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.touches[0].clientX;

//   sdSlider.style.left = `${x - startx}px`;

//   checkboundary();
// });

// function checkboundary() {
//   let outer = sdSliderContainer.getBoundingClientRect();
//   let inner = sdSlider.getBoundingClientRect();

//   if (parseInt(sdSlider.style.left) > 0) {
//     sdSlider.style.left = "0px";
//   } else if (inner.right < outer.right) {
//     sdSlider.style.left = `-${inner.width - outer.width}px`;
//   }
// }
