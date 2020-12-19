const body = document.body;
const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");

let activeSlide = 0;

function setBg() {
  //Set background
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  //Set slide background
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

setBg();

left.addEventListener("click", () => {
  changeSlide(true);
});
right.addEventListener("click", () => {
  changeSlide(false);
});

function changeSlide(direction) {
  if (direction) {
    if (activeSlide === 0) {
      activeSlide = slides.length - 1;
    } else {
      activeSlide--;
    }
  } else {
    if (activeSlide === slides.length - 1) {
      activeSlide = 0;
    } else {
      activeSlide++;
    }
  }
  setBg();
}
