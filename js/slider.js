const d = document,
  cl = console.log;
export default function slider(slider, next, prev) {
  const $slider = d.querySelector(slider),
    $slides = $slider.children;
  const goNextSlide = () => {
    for (const slide of $slides) {
      if (slide.nextElementSibling) {
        if (slide.classList.contains("is-active")) {
          slide.classList.remove("is-active");
          slide.nextElementSibling.classList.add("is-active");
          break;
        }
      } else {
        slide.classList.remove("is-active");
        $slider.firstElementChild.classList.add("is-active");
      }
    }
  };
  const goPrevSlide = () => {
    for (const slide of $slides) {
      if (slide.nextElementSibling) {
        if (slide.classList.contains("is-active")) {
          slide.classList.remove("is-active");
          slide.previousElementSibling
            ? slide.previousElementSibling.classList.add("is-active")
            : $slider.lastElementChild.classList.add("is-active");
          break;
        }
      } else {
        slide.classList.remove("is-active");
        slide.previousElementSibling.classList.add("is-active")
      }
    }
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(next)) {
      goNextSlide();
    }
    if (e.target.matches(prev)) {
      goPrevSlide();
    }
  });
}
