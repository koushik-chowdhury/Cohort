document.addEventListener("DOMContentLoaded", () => {

  // Getting the elements
  const container = document.querySelector(".container");
  const button = document.getElementById("generate");
  const copy = document.getElementById("get");
  const tweet = document.getElementById("tweet");
  const save = document.getElementById("save");

  const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
  const options = { method: "GET", headers: { accept: "application/json" } };

  // Fetching the quote
  async function fetchQuote() {
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  // Displaying the quote after loading the window
  fetchQuote().then((data) => {
    const { content, author } = data;
    display(content, author);
  });

  // Generating new quote on click
  button.addEventListener("click", async () => {
    const data = await fetchQuote();

    if (data) {
      display(data.content, data.author);
    }
  });

  // displaying the quote
  function display(content, author) {
    container.innerHTML = "<h1>Quote of the Day</h1>";
    copy.innerText = "Copy";

    let quoteContent = document.createElement("p");
    let quoteAuthor = document.createElement("p");
    quoteContent.classList.add("quote");
    quoteAuthor.classList.add("author");

    quoteContent.textContent = ` "${content}"`;
    quoteAuthor.textContent = `~${author}`;

    // Copieng to clipboard
    copy.addEventListener("click", async () => {
      copy.innerText = "Copied!";
      navigator.clipboard.writeText(content);
      showToast("Copied");
    });

    // Sharing on X
    tweet.addEventListener("click", async () => {
      tweet.setAttribute(
        "href",
        `https://twitter.com/intent/tweet?text=${content} \n ~${author}`
      );
    });
    container.appendChild(quoteContent);
    container.appendChild(quoteAuthor);
  }
  // Downloading the quote
  save.addEventListener("click", async () => {
    html2canvas(container).then((canvas) => {
      let link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "quote.png";
      link.click();
    });
  });

  function showToast(message) {
    // Create toast div
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.className = "toast";

    // Append to body
    document.body.appendChild(toast);

    // Show with animation
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2000);
  }
});
