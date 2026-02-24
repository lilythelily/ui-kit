'use strict';

// === 📌 main menu control ===
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

// === 📌 button navigation to external URL===

const urlBtn = document.querySelector('.urlBtn');
const urlBtnSmall = document.querySelector('.urlBtn-small');
const urlHamburger = document.querySelector("#main-hamburger-contact-btn");
const urlBtnIcon = document.querySelector("#bottom-download-btn");

urlBtn.addEventListener('click', () => {
  window.open('https://payhip.com/b/bVzwD', '_blank')
});

urlBtnSmall.addEventListener("click", () => {
  window.open("https://payhip.com/b/bVzwD", "_blank");
});

urlHamburger.addEventListener("click", () => {
  window.open("https://payhip.com/b/bVzwD", "_blank");
});

urlBtnIcon.addEventListener("click", () => {
  window.open("https://payhip.com/b/bVzwD", "_blank");
});


// === 📌 toggle button control ===

const toggleBtn = document.querySelector(".toggle-off");
const toggleCircle = document.querySelector(".toggle-circle");

toggleBtn.addEventListener("click", () => {
  console.log("clicked");
    toggleBtn.classList.toggle("toggle-off-active");
    toggleCircle.classList.toggle("toggle-circle");
    toggleCircle.classList.toggle('toggle-circle-active');
});
