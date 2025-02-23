/**
 * Write your challenge solution here
 */

let mainHeading = document.getElementById("mainHeading");
let colorButtons = document.querySelector(".color-buttons");

colorButtons.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    color = e.target.innerText.toLowerCase();
    console.log(color)
    mainHeading.style.color = color === "reset" ? "black" : color;
    document.title = mainHeading.style.color.toUpperCase()
  }
});
