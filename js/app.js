const triggerMenu = document.getElementById("header-trigger");
const menu = document.querySelector(".header-menu__list");

function show() {
  menu.classList.toggle("show");
}

triggerMenu.onclick = function () {
  show();
};

const cookie = document.querySelector(".cookie");
const cookieBtn = document.querySelector(".cookie__btn")

function close(){
  cookie.classList.add("close");
}
cookieBtn.onclick = function(){
  close();
}

