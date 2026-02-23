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

// === 📌 checkbox control ===
const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('unchecked');
    })
})

// === 📌 thanks popup display control ===
const thanksModal = document.querySelector('.thanks-modal');
const modalClose = document.querySelector('.modal-close');
const submitBtn = document.querySelector('.contact-btn');

function toggleDisplay(item) {
    item.classList.toggle('hide');
    item.classList.toggle('flex');
}

submitBtn.addEventListener('click', () => {
    toggleDisplay(thanksModal);
})

modalClose.addEventListener('click', () => {
    toggleDisplay(thanksModal);
})

