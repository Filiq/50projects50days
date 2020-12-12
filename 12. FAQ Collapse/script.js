const faq = document.querySelectorAll(".faq");
const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    faq[index].classList.toggle("active");
  });
});

/***** OR *****/

/*

buttons.forEach(btn => {
    btn.addEventlistener("click", () => {
        btn.parentNode.classList.toggle("active");
    });
});

*/
