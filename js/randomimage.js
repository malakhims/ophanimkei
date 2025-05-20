// Define an array of image URLs or file paths you want to cycle through
const backgroundImages = [
    '/images/ynocliquebg1.png',
    '/images/ynocliquebg2.png',
    '/images/ynocliquebg3.png',
    '/images/ynocliquebg4.png',
    '/images/ynoproject.png',
    '/images/ynoproject2.png',
    '/images/ynoproject3.png',
    '/images/ynoproject5.png',
    '/images/ynocliquebg6.png',
    '/images/ynocliquebg7.png',
    '/images/ynocliquebg8.png',
    '/images/ynocliquebg9.png',
    '/images/ynocliquebg10.png',
    '/images/ynocliquebg11.png',
  ];
  
  // Function to get a random background image from the array
  function getRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  }
  
  // Function to set the background image of the body
  function changeBackground() {
    const randomImage = getRandomBackgroundImage();
    document.body.style.backgroundImage = `url('${randomImage}')`;
  }
  
  // Call the function when the page is loaded
  changeBackground();
