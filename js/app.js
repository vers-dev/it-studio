// Menu
const triggerMenu = document.getElementById("header-trigger");
const menu = document.querySelector(".header-menu__list");

function show() {
  menu.classList.toggle("show");
}

triggerMenu.onclick = function () {
  show();
};
// EndMenu

// Cookie
const cookie = document.querySelector(".cookie");
const cookieBtn = document.querySelector(".cookie__btn");
const cookieSub = localStorage.getItem("cookieSub");

if (cookieSub === 'true'){
  close();
}

function close() {
  cookie.classList.add("close");
}

cookieBtn.onclick = function () {
  localStorage.setItem("cookieSub", true);
  close();
};
// End Cookie
