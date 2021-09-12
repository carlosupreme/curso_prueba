export default function scrollUp(btn, clase) {
  const $btn = document.querySelector(btn);
  if (window.scrollY > 500) {
    $btn.classList.add(clase);
    document.addEventListener("click", (e) => {
      if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }
    });
  } else {
    $btn.classList.remove(clase);
  }
}
