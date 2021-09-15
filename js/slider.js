const d = document,
  cl = console.log;
// slider con opacity 0 y visibility hidden, intercambiando clases
export default function slider(slider, next, prev, autoplay) {
  const $slider = d.querySelector(slider),
    $slides = $slider.children;
  let loop;
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
      clearInterval(loop);
      d.querySelector(autoplay).removeAttribute("disabled");
    }
    if (e.target.matches(prev)) {
      goPrevSlide();
      clearInterval(loop);
      d.querySelector(autoplay).removeAttribute("disabled");
    }
    if (e.target.matches(autoplay)) {
      loop = setInterval(() => {
        goNextSlide();
      }, 3000);
      d.querySelector(autoplay).setAttribute("disabled", "true");
    }
  });
}
// slider sin clase ni opacity pero el slider en css debe tener el width en `${numeroDeSlides*100}%`
export function sliderMarginLeft(slider, next, prev, autoplay) {
  const $slider = d.querySelector(slider),
    $slides = [...$slider.children]
    let intervalo
  $slider.insertAdjacentElement("afterbegin", $slides[$slides.length - 1]);
  d.addEventListener("click", (e) => {
    if (e.target.matches(next)) {
      nextElement();
      clearInterval(intervalo)
      d.querySelector(autoplay).removeAttribute("disabled");
    }
    if (e.target.matches(prev)) {
      prevElement();
      clearInterval(intervalo)
      d.querySelector(autoplay).removeAttribute("disabled");
    }
    if (e.target.matches(autoplay)) {
      d.querySelector(autoplay).setAttribute("disabled","true");
      intervalo = setInterval(() => {
        nextElement()
      }, 3000);
    }
  });
  function nextElement() {
    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "margin 0.5s";
    setTimeout(() => {
      $slider.style.transition = "none";
      $slider.insertAdjacentElement("beforeend", $slider.firstElementChild);
      $slider.style.marginLeft = "-100%";
    }, 500);
  }
  function prevElement() {
    $slider.style.marginLeft = "0";
    $slider.style.transition = "margin 0.5s";
    setTimeout(() => {
      $slider.style.transition = "none";
      $slider.insertAdjacentElement("afterbegin", $slider.lastElementChild);
      $slider.style.marginLeft = "-100%";
    }, 500);
  }
}
