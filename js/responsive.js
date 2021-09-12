const d = document,
  w = window;
const cl = console.log;
export default function responsive(id, mq, mobile, desktop) {
  let breakpoint = w.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) d.getElementById(id).innerHTML = mobile;
    else d.getElementById(id).innerHTML = desktop;
  };
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}

export function responsiveTester(form) {
  const $form = d.getElementById(form)
  let ventana
  d.addEventListener("submit", (e) => { 
    if (e.target === $form) {
      e.preventDefault();
       ventana =  w.open(
         $form.direction.value,
         "ventana",
        `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
      )
      d.addEventListener('click',e=>{
        if(e.target === $form.close) ventana.close()
      })
    }
  });
}
