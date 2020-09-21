"use strict";

var menuButton = document.querySelector(".kad-menu-button");
var navItems = document.querySelector(".kad-nav");
var barHide = document.querySelector(".kad-menu-bar-two");
var barLeft = document.querySelector(".kad-menu-bar-one");
var barRight = document.querySelector(".kad-menu-bar-three");
menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle("toggle-kad-nav");
  barHide.classList.toggle("hide-bar-two");
  barLeft.classList.toggle("cross-bar-one");
  barRight.classList.toggle("cross-bar-three");
}