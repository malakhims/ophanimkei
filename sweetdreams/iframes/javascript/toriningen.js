const textElement = document.getElementById('tori-text');

const texts = [
  "Did you know there are approximately 20,000 birds exploring the skies at this very moment?",
  "I feel so much anxiety. Everyone smells like cats, and I'm absolutely allergic to them.",
  "*CHUU CHUU CHUU CHUU*",
  "*blub* *blub* *blub*",
  "Don't you love the music? Doesn't it make your brain melt?",
  "GET AWAY FROM ME YOU FREAKAZOID. I hate all hikikis but ESPECIALLY YOU.",
  "Nyah nyah. It's important to go outside sometimes. The cat distribution system is counting on you.",
  "This experience was brought to you by ophanimkei and fizzsea for the Yume Nikki Sweet Dreams Zine. Thank you for your time!",
  "You can't leave this dream. Sorry.",
  "Rooftop",
  "Lower Floor",
  "Upper Floor",
  "Front Desk",
  "Jazz Room",
];

let toriText = ""; // Holds current text
let index = 0;
let textDelay;

function showText(characterIndex) {
  toriText = texts[characterIndex]; // Select text based on the character index
  textElement.style.display = 'block'; // Show text element
  textElement.textContent = ''; // Clear any existing text
  index = 0; // Reset index

  // Start typing effect
  textDelay = setInterval(typeText, 60); // Adjust delay as needed
}

function hideText() {
  textElement.style.display = 'none'; // Hide text element
  textElement.textContent = ''; // Clear text
  index = 0; // Reset index to 0
  clearInterval(textDelay); // Clear the interval
}

function typeText() {
  if (index < toriText.length) {
    textElement.textContent += toriText.charAt(index); // Add one character
    index++; // Move to the next character
  } else {
    clearInterval(textDelay); // Stop the interval when done
  }
}