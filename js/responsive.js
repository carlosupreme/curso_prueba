const d = document,
  w = window;

export default function responsive(id, mq, mobile, desktop) {
  let breakpoint = w.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) d.getElementById(id).innerHTML = mobile;
    else d.getElementById(id).innerHTML = desktop;
    console.log(e, breakpoint);
   };
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint)
}
