//carrousel

const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel-track");
const items = carousel.querySelectorAll(".carousel-item");
const dotsContainer = carousel.querySelector(".carousel-dots");

let currentIndex = 0;
let timer = null;
const interval = 3000;

// cria bolinhas automaticamente
items.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.dataset.index = index;

  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    goToSlide(index);
    startAutoPlay();
  });

  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function updateDots(index) {
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  updateDots(index);
  currentIndex = index;
}

function nextSlide() {
  let next = currentIndex + 1;
  if (next >= items.length) next = 0;
  goToSlide(next);
}

function startAutoPlay() {
  stopAutoPlay();
  timer = setInterval(nextSlide, interval);
}

function stopAutoPlay() {
  if (timer) clearInterval(timer);
}

startAutoPlay();


//accordion
document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll('[data-dt="accordion"] button');

  botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();

      const dt = botao.closest("dt");
      const dd = dt.nextElementSibling;

      dt.classList.toggle("active");
      dd.classList.toggle("active");
    });
  });
});


