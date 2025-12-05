export default function initSmoothScroll() {
  const btns = document.querySelectorAll("[data-nav='smooth']");
  
  if (btns.length) {
    btns.forEach((btn) => {
      btn.addEventListener("click", activeSmoothScroll);
    });
  }

  function activeSmoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
