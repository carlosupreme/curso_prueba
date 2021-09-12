import darkmode from "./darkmode.js";
import countdown from "./countdown.js";
import deployMenu from "./menu_hamburguesa.js";
import activarReloj from "./clock_alarm.js";
import stopWatch from "./stop_watch.js";
import moveBall from "./move_ball.js";
import scrollUp from "./scroll_top.js";

document.addEventListener("DOMContentLoaded", () => {
  // SECTION 1
  countdown(
    "#section1 .container-countdown",
    "30 oct 2021, 06:00:00",
    "Happy Birthday"
  );
  countdown(
    "#section1 .container-countdown2",
    "25 dec 2021, 00:00:00",
    "Happy Holidays!!"
  );
  // SECTION 2
  stopWatch(
    ".watch .ms",
    ".watch .secs",
    ".watch .mins",
    ".buttons .play",
    ".buttons .pause",
    ".buttons .restart"
  );
  // HAMBURGER BUTTON
  deployMenu("#btn-menu", "#menu", "#menu .menu-item", "is-active");
  // SECCION 4 RELOJ Y ALARMA
  activarReloj(
    "#section4 .reloj",
    "#initClock",
    "#stopClock",
    ".alarma",
    "#initAlarma",
    "#stopAlarma",
    "./assets/Despertador.mp3"
  );
});
// dark mode
darkmode(".darkMode", "html", "dark");
// SECCION 5 move the ball
document.addEventListener("keydown", (e) => {
  moveBall(e, ".canvas .ball", ".canvas", ".canvas-apple", ".title.main");
});
// section 6 scroll up  btn
window.addEventListener('scroll',e=>{
  scrollUp('#section6 .scroll-top',"show")
})
