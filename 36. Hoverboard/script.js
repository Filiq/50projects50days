const container = document.querySelector(".container");
const colors = ["#48bb01", "#064d9f", "#cc3d1b", "#fff429", "#1e9be1"];
const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
