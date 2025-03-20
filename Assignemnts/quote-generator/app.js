const container = document.querySelector(".container");
const button = document.getElementById("generate");
const copy = document.getElementById('get')
const tweet = document.getElementById('tweet')

const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
const options = { method: "GET", headers: { accept: "application/json" } };

async function fetchQuote() {
  try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
fetchQuote().then((data) => {
  const { content, author } = data;
  display(content, author);
});

button.addEventListener("click", async () => {
  const data = await fetchQuote();
 
  if (data) {
    display(data.content, data.author);
  }
});

function display(content, author) {
  container.innerHTML = ''
  copy.innerText = "Copy"

  let quoteContent = document.createElement("p");
  let quoteAuthor = document.createElement("p");

  quoteContent.textContent = content;
  quoteAuthor.textContent = author;

  copy.addEventListener('click',async ()=>{
    copy.innerText = "Copied!"
    navigator.clipboard.writeText(content)
  })
tweet.addEventListener('click',async ()=>{
  tweet.setAttribute("href",`https://twitter.com/intent/tweet?text=${content} \n \n ~${author}`)
})
  container.appendChild(quoteContent);
  container.appendChild(quoteAuthor);
}
