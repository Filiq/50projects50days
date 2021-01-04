const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", backgroundBlur);

function backgroundBlur(e) {
  const length = e.target.value.length * 2;
  background.style.filter = `blur(${20 - length}px)`;
}
