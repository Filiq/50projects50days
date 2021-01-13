const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 8;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;

  container.appendChild(img);
}

function getRandomNr() {
  return Math.floor(Math.random() * 12 + 300);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}
