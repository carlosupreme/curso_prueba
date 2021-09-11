export default function deployMenu(button, menu, link,clase) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(button) || e.target.matches(`${button} *`)) {
      d.querySelector(button).classList.toggle(clase);
      d.querySelector(menu).classList.toggle(clase);
    }
    if(e.target.matches(link)){
      d.querySelector(button).classList.remove(clase);
      d.querySelector(menu).classList.remove(clase);
    }
  });
}
