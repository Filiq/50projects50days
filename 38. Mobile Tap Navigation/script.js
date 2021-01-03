const imgs = document.querySelectorAll(".content");
const lis = document.querySelectorAll("nav ul li");

lis.forEach((li, index) => {
  li.addEventListener("click", () => {
    imgs.forEach((img) => img.classList.remove("show"));
    lis.forEach((li) => li.classList.remove("active"));
    imgs[index].classList.add("show");
    li.classList.add("active");
  });
});
