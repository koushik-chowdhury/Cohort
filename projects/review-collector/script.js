let name = document.getElementById("name");
let review = document.getElementById("review");
let organisationName = document.getElementById("organisation-name");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
  let recommendation =
    document.querySelector('input[name="recom"]:checked')?.value || "error";
  console.log(recommendation);
  if (
    name.value !== "" &&
    review.value !== "" &&
    organisationName.value !== ""
  ) {
    let reviewContainer = document.querySelector(".reviews");
    let indiReview = document.createElement("div");
    indiReview.classList.add("indi-review");
    indiReview.innerHTML = `
                        <div class="content" id="content">
                            <p>~${name.value}</p>
                            <p>${review.value}</p>
                        </div>
                        <div class="information">
                            <p class="ids">${organisationName.value}</p>
                            <p class="ids">Date: ${new Date().toLocaleDateString()}</p>
                            <p class="ids">Time: ${new Date().toLocaleTimeString()}</p>
                            <p class="ids">Recommendation: ${recommendation}</p>
                        </div>

    `;
    reviewContainer.appendChild(indiReview);
    let status = document.querySelector(".status");
    status.style.display = "none";
    let reviewCount;
    reviewCount = reviewContainer.querySelectorAll(".indi-review").length;
    console.log(reviewCount);
    let count = document.getElementById("review-count");
    count.innerHTML = `Total Review : ${reviewCount}`;
    let information = indiReview.querySelector(".information");
    if (recommendation === "Yes") {
      information.st = "#145a32";
    } else if (recommendation === "No") {
      information.style.backgroundColor = "#D32F2F";
    }
    name.value = "";
    review.value = "";
    organisationName.value = "";
  } else {
    alert("Sab kuch dalo");
  }
});
