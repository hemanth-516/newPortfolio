let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
var typed = new Typed(".multiple-text", {
  strings: ["Backend Developer", "Python Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
let header = document.querySelectorAll("header");
let menu = document.querySelectorAll("#menu-icon");
let navbar = document.querySelectorAll(".navbar");

window.addEventListener("scroll", () => {
header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
navbar.classList.toggle("active");
};
window.onscroll = () => {
navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
if (darkmode.classList.contains("bx-moon")) {
  darkmode.classList.replace("bx-moon", "bx-sun");
  document.body.classList.add("active");
} else {
  darkmode.classList.replace("bx-sun", "bx-moon");
  document.body.classList.remove("active");
}
};
                                    