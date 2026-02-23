'use strict';

// === 📌 top hamburger-menu control ===
const menuIcon = document.querySelector(".main-hamburger-icon");
const mainMenu = document.querySelector(".main-hamburger-menu");
const closeMenu = document.querySelector(".main-hamburger-close");

function displayMenu() {
  mainMenu.classList.toggle('main-hide');
  mainMenu.classList.toggle('main-flex');
}

menuIcon.addEventListener('click', () => {
  displayMenu();
})

closeMenu.addEventListener('click', () => {
  displayMenu();
})
