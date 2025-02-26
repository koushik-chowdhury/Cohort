/**
 * Write your challenge solution here
 */
let panel = document.querySelector(".panel");
let closeButton = document.querySelector(".toggle-btn");
let panelCloseButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", (event) => {
  panel.className = "panel active";
  event.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", () => {
    panel.classList.remove("active");
  });
});

panel.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents the body click event
});

panelCloseButton.addEventListener("click", () => {
  panel.classList.remove("active");
});
