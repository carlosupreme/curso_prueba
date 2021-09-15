const d = document,
  cl = console.log;
export default function slider(slider, next, prev, autoplay) {
  const $slider = d.querySelector(slider),
    $slides = $slider.children;
    let loop
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
        slide.previousElementSibling.classList.add("is-active");
      }
    }
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(next)) {
      goNextSlide();
      clearInterval(loop)
      cl(d.querySelector(autoplay))
      d.querySelector(autoplay).removeAttribute('disabled')
    }
    if (e.target.matches(prev)) {
      goPrevSlide();
      clearInterval(loop)
      d.querySelector(autoplay).removeAttribute('disabled')
    }
    if(e.target.matches(autoplay)){
      loop = setInterval(() => {
        goNextSlide()
      }, 3000);
      d.querySelector(autoplay).setAttribute("disabled","true")
    }
  });
}
