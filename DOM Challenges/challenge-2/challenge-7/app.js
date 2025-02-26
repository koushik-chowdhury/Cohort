let accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  if (e.target.classList.contains("accordion-button")) {
    let content = e.target.nextElementSibling;
    document.querySelectorAll(".accordion-content").forEach((el) => {
      if (el !== content) {
        el.style.maxHeight = null;
        el.previousElementSibling.querySelector(".arrow").textContent = "↓";
      }
    });
    if (!content.style.maxHeight) {
      content.style.maxHeight = content.scrollHeight + "px";
      event.target.querySelector(".arrow").textContent = "↑";
    } else {
      content.style.maxHeight = null;
      event.target.querySelector(".arrow").textContent = "↓";
    }
  }
});
