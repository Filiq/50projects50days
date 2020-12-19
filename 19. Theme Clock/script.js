const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");
const timeFormatBtn = document.querySelector(".time-format");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];

toggleBtn.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    e.target.innerText = "Light mode";
  } else {
    e.target.innerText = "Dark mode";
  }
});

timeFormatBtn.addEventListener("click", () => {
  if (timeFormatBtn.classList.contains("12")) {
    timeFormatBtn.classList.remove("12");
    timeFormatBtn.classList.add("24");
    timeFormatBtn.innerText = "24 hour clock";
  } else {
    timeFormatBtn.classList.remove("24");
    timeFormatBtn.classList.add("12");
    timeFormatBtn.innerText = "12 hour clock";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

  if (timeFormatBtn.classList.contains("12")) {
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}`;
  } else {
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
  }
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 10);
