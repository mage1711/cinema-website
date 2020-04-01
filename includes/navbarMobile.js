var menubtn = document.querySelector(".menu_btn");
var menu = document.querySelector(".menu");
var menunav = document.querySelector(".menu_nav");
var menupic = document.querySelector(".menu_pic");
var navitem = document.querySelectorAll(".nav_item");

var showmenu = false;

menubtn.addEventListener("click", togglemenu);

function togglemenu() {
  if (!showmenu) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menunav.classList.add("show");
    menupic.classList.add("show");

    navitem.forEach(item => item.classList.add("show"));

    showmenu = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menunav.classList.remove("show");
    menupic.classList.remove("show");

    navitem.forEach(item => item.classList.remove("show"));

    showmenu = false;
  }
}
