let header = document.querySelector(".header");
let searchNavBar = document.querySelector('.searchbar')

window.addEventListener("scroll", function () {
  shrink();
});

function shrink() {
  if (scrollY > 100) {
    header.classList.add("navbar-shrink");
    searchNavBar.classList.add('view')
  } else {
    header.classList.remove("navbar-shrink");
    searchNavBar.classList.remove('view')
  }
}


const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});



