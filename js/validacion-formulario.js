const cl = console.log;
export default function validarFormulario(form, loader) {
  const $form = document.getElementById(form),
  $inputs = document.querySelectorAll(`#${form} [required]`),
  $message = document.createElement("h2");
  $message.classList.add("none","form-response","title");
  $form.insertAdjacentElement('beforeend',$message)
  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("invalid-message", "none");
    input.insertAdjacentElement("afterend", $span);
  });
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(`#${form} [required]`)) {
      let input = e.target,
      pattern = input.pattern || input.dataset.pattern;
      
      if (pattern && input.value.length > 1) {
        let regExp = new RegExp(pattern);
        return !regExp.exec(input.value)
        ? document.getElementById(input.name).classList.remove("none")
        : document.getElementById(input.name).classList.add("none");
      }
      
      if (!pattern) {
        return input.value === ""
        ? document.getElementById(input.name).classList.remove("none")
        : document.getElementById(input.name).classList.add("none");
      }
    }
  });
  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      $message.innerHTML = `Gracias ${$form.name.value} tu formulario ha sido enviado exitosamente! 📧`;
      document.querySelector(loader).classList.remove("none");
      setTimeout(() => {
        $message.classList.remove("none");
        document.querySelector(loader).classList.add("none");
        $form.reset();
        setTimeout(() => {
          $message.classList.add("none");
        }, 3000);
      }, 2000);
    }
  });
}

export function showPassword(input, image, show, hide) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(image)) {
      if (document.querySelector(input).getAttribute("type") == "text") {
        document.querySelector(input).setAttribute("type", "password");
        document.querySelector(
          image
          ).style.background = `url("${hide}") no-repeat center center / cover`;
        } else {
          document.querySelector(
            image
            ).style.background = `url("${show}") no-repeat center center / cover`;
            document.querySelector(input).setAttribute("type", "text");
          }
        }
      });
    }
    