const imgs = document.getElementById("imgs");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const img = document.querySelectorAll("#imgs img");

let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;

  changeImage();
}

function changeImage() {
  if (index === img.length) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

prevBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});
