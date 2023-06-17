let header = document.querySelector(".header");
let searchNavBar = document.querySelector('.searchbar')
let bodySearch = document.querySelector('.body-search');
window.addEventListener("scroll", function () {
  shrink();
});

function shrink() {
  if (scrollY > 100) {
    header.classList.add("navbar-shrink");
    searchNavBar.classList.add('view');
    bodySearch.classList.add('closed');
  } else {
    header.classList.remove("navbar-shrink");
    searchNavBar.classList.remove('view');
    bodySearch.classList.remove('closed');
  }
}


const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});



