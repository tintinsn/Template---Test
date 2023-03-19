// Get quote from API
// let apiQuote = [];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// show loader
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hidden loader
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function newQuote() {
  loading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // check if author field is blank
  !quote.author
    ? (authorText.textContent = "Unknown")
    : (authorText.textContent = quote.author);

  // check quote length to determine styling
  quote.text.length > 50
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");
  quoteText.textContent = quote.text;
  complete();
}

// async function getQuote() {
//   const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuote = await response.json();
//     newQuote();
//   } catch (error) {
//     //console.log(error);
//   }
// }

// Tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// on loader
newQuote();
