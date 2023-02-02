var slider = document.querySelector('.slider');
var images = slider.querySelectorAll('img');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var currentImageIndex = 0;

prevButton.addEventListener('click', function() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + images.length - 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
});

nextButton.addEventListener('click', function() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
});
