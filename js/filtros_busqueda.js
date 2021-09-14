const d = document;
export default function filtrar(elements, input, claseRemovedora) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      d.querySelectorAll(elements).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? (el.classList.remove(claseRemovedora))
          : (el.classList.add(claseRemovedora))
      );
    }
    if(e.key === "Escape") e.target.value = ''
  });
}
