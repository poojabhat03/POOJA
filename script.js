const carouselImages = document.getElementById('carouselImages');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

// Function to display the current image at the specified index
function showImage(index) {
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    // If at the first image, loop back to the last image
    currentIndex = 2;
  }
  showImage(currentIndex);
});

// Event listener for the "Next" button
nextButton.addEventListener('click', function () {
  if (currentIndex < 2) {
    currentIndex++;
  } else {
    // If at the last image, loop back to the first image
    currentIndex = 0;
  }
  showImage(currentIndex);
});

// Show the first image initially
showImage(currentIndex);
