const triggerMenu = document.querySelector(".header-trigger");
const menu = document.querySelector(".header-menu__list");

function show() {
  menu.classList.toggle("show");
}

triggerMenu.onclick = function () {
  show();
};


