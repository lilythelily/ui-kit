"use strict";

// === 📌 checkbox control ===
const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("unchecked");
  });
});
