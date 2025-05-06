const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"
];

const backgrounds = [
    "url('https://i.imgur.com/zB5fzgL.jpeg')",
    "url('https://i.imgur.com/DYXLsoB.jpeg')",
    "url('https://i.imgur.com/Qvqr861.jpeg')",
    "url('https://i.imgur.com/9Qp0GV0.jpeg')",
    "url('https://i.imgur.com/QTsdbgC.jpeg')",
    "url('https://i.imgur.com/M762ndO.jpeg')",
    "url('https://i.imgur.com/EbNOWMa.jpeg')",
    "url('https://i.imgur.com/Z0ggLRt.jpeg')", // Corrected
    "url('https://i.imgur.com/gRTvH1N.jpeg')"  // Corrected
];

let backgroundIndex = 0; // Initialize a counter for the backgrounds

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log("Random Index:", randomIndex); // Debugging

    // Update the quote text
    document.getElementById('quote').textContent = quotes[randomIndex];

    // Change the container's background in order
    const container = document.querySelector('.container');
    container.style.backgroundImage = backgrounds[backgroundIndex];

    // Increment the background index and reset if it exceeds the array length
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
}

const form = document.getElementById('quoteForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const quote = document.getElementById('favoriteQuote').value;

    if (quote) {
        // Get existing quotes from localStorage
        const storedQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
        
        // Add the new quote
        storedQuotes.push(quote);

        // Save back to localStorage
        localStorage.setItem('favoriteQuotes', JSON.stringify(storedQuotes));

        alert(`Thank you for sharing your favorite quote: "${quote}"`);
        form.reset(); // Clear the form
    }
});