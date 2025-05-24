// Quotes 
const quotes = [
  "The future depends on what you do today. — Mahatma Gandhi",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "It always seems impossible until it's done. — Nelson Mandela",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "You are capable of amazing things."
];

const quoteBox = document.getElementById('quote-box');
const nextBtn = document.getElementById('next-btn');

// Randomizer
const showRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.classList.remove('fade-in'); 
  void quoteBox.offsetWidth; 
  quoteBox.textContent = quotes[randomIndex];
  quoteBox.classList.add('fade-in');
};

window.addEventListener('DOMContentLoaded', showRandomQuote);

nextBtn.addEventListener('click', showRandomQuote);
