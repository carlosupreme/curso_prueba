const d = document,
  cl = console.log;
export default function cambiarScroll() {
  const $sections = d.querySelectorAll("section[data-scroll]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting)
      d.querySelector(`a[data-scroll][href="#${id}"]`).classList.add('is-active')
      else
      d.querySelector(`a[data-scroll][href="#${id}"]`).classList.remove('is-active')
    });
  };
  const observer = new IntersectionObserver(cb, {
    // root:
    // rootMargin: "-250px"
    threshold: [0.5,0.75]
  });
  $sections.forEach((section) => observer.observe(section));
}
