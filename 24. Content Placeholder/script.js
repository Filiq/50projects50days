const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

const time = new Date();
const months = [
  "Han",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getData() {
  header.innerHTML = `<img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, aperiam!`;
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/40.jpg" alt="">`;
  name.innerHTML = "John Doe";
  date.innerHTML = `${
    months[time.getMonth()]
  } ${time.getDate()}, ${time.getFullYear()}`;

  animatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animatedBgTexts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2000);
