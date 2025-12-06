export default function initAccordionList() {
  const questions = document.querySelectorAll("[data-dt='accordion']");
  if (questions.length) {
    questions[0].classList.add("active");
    questions[0].nextElementSibling.classList.add("active");

    questions.forEach((q) => q.addEventListener("click", handleClick));

    function handleClick() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }
  }
}