const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
const interval = 5000; // Tempo em milissegundos entre as transições (5 segundos)

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = carouselSlides.length - 1;
  } else if (slideIndex >= carouselSlides.length) {
    currentSlide = 0;
  }

  for (let i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].style.display = 'none';
  }

  carouselSlides[currentSlide].style.display = 'block';
}

function showNextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

function autoSlide() {
  showNextSlide();
}

setInterval(autoSlide, interval);

showSlide(currentSlide);