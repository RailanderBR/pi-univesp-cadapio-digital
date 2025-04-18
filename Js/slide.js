let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = (i === currentSlide) ? 'block' : 'none';
  });
}

// Avançar para o próximo slide a cada 5 segundos
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

// Exibir o primeiro slide inicialmente
showSlide(currentSlide);
