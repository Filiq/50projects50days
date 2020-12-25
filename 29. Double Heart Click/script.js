const image = document.querySelector(".loveMe");
const times = document.getElementById("times");
let timesNumber = 0;
let clickTime = 0;

image.addEventListener("click", (e) => {
  let time = new Date().getTime();
  if (clickTime === 0) {
    clickTime = time;
  } else {
    if (time - clickTime < 600) {
      showHeart(e);
      clickTime = 0;
    } else {
      clickTime = time;
    }
  }
});

function showHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  heart.style.top = `${e.clientY - e.target.offsetTop}px`;
  heart.style.left = `${e.clientX - e.target.offsetLeft}px`;
  image.appendChild(heart);
  setTimeout(() => heart.remove(), 600);

  times.innerText = ++timesNumber;
}
