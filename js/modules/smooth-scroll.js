export default function initSmoothScroll() {
  const btn = document.querySelector("[data-nav='smooth']");
  
  if(btn) {
  btn.addEventListener("click", activeSmoothScroll);

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
}