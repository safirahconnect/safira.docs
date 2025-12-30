export default function initCarousel() {

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.carousel-dots');

let index = 0;
let interval;

/* cria bolinhas */
items.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    index = i;
    updateCarousel();
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dots button');

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % items.length;
  updateCarousel();
}

function startAutoplay() {
  interval = setInterval(nextSlide, 4000);
}

function resetAutoplay() {
  clearInterval(interval);
  startAutoplay();
}

startAutoplay();
}