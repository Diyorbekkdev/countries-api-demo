let darkBtn = document.querySelector(".check-dark");
let bodyDark = document.querySelector("body");

darkBtn.addEventListener("click", function () {
  bodyDark.classList.toggle("dark");
});
