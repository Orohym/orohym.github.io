const content = document.querySelector('main').textContent;
const wordsPerMinute = 200; // Change this value as needed
const words = content.trim().split(/\s+/).length;
const readingTime = Math.ceil(words / wordsPerMinute);
document.getElementById('reading-time').textContent = readingTime + " minutes";