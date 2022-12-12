const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const windowPs = window.scrollY > 0;
  navbar.classList.toggle("scrolling-active", windowPs);
});
