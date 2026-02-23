'use strict';

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

