const newQuote = document.getElementById("new-quote");
const quoteHtml = document.getElementById("quote");
const author = document.getElementById("author");
const quoteContainer = document.getElementById("quote-container");
let quoteData = []; //array ချင်းလဲ let နဲ့ပဲရ
const randomQuote = () => {
  const quote = quoteData[Math.floor(Math.random() * quoteData.length)];
  quoteHtml.textContent = quote.text; //json က လာမှာ

  if (!quote.author) {
    author.textContent = "Anonymous";
  } else {
    author.textContent = quote.author;
  }
  if (quote.text.length > 50) {
    quoteHtml.classList.add("long-quote");
  } else {
    quoteHtml.classList.remove("long-quote");
    ("long-quote");
  }
};
newQuote.addEventListener("click", randomQuote);
async function quoteGenerator() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    quoteData = await response.json(); //json format ကို object ပုံစံပြောင်း
    randomQuote();
  } catch (error) {}
}
quoteGenerator();
