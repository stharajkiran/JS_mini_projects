let quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
];

const usedQuotes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  // Check if the quote has already been used
  if (quotes.length == 0) {
    quotes = [...usedQuotes];
  }
  // select the quote using the random index
  quoteElement.innerHTML = quotes[randomIndex];
  // Edit the used quotes set
  usedQuotes.add(quotes[randomIndex]);
  quotes.splice(randomIndex, 1);
  console.log("event ends");
}
