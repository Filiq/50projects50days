const magicBtn = document.getElementById("btn");
const boxes = document.getElementById("boxes");

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 4; x++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-x * 125}px ${-i * 125}px`;
      boxes.appendChild(box);
    }
  }
}

createBoxes();

magicBtn.addEventListener("click", () => boxes.classList.toggle("big"));
