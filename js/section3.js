export default function deployMenu(button, menu, link) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(button) || e.target.matches(`${button} *`)) {
      d.querySelector(button).classList.toggle("is-active");
      d.querySelector(menu).classList.toggle("is-active");
    }
    if(e.target.matches(link)){
      d.querySelector(button).classList.remove("is-active");
      d.querySelector(menu).classList.remove("is-active");
    }
  });
}
