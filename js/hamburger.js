'use strict';

// === 📌 hamburger menu control ===

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.hamburger-close');

function toggleHamburger(item) {
    item.classList.toggle('slide-in');

}

hamburgerIcon.addEventListener('click', () => {
    toggleHamburger(hamburgerMenu);
})

closeBtn.addEventListener('click', () => {
    toggleHamburger(hamburgerMenu);
})
