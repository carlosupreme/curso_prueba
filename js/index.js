import darkmode from "./darkmode.js";
import countdown from "./countdown.js";
import deployMenu from "./menu_hamburguesa.js";
import activarReloj from "./clock_alarm.js";
import stopWatch from "./stop_watch.js";
import moveBall from "./move_ball.js";
import scrollUp from "./scroll_top.js";
import responsive, { responsiveTester } from "./responsive.js";

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
  // responsive
  responsive(
    "video",
    "(max-width: 800px)",
    `<a class="title" href="https://www.youtube.com/watch?v=KvCUCkQ4tUs"> Ver video en Youtube 😊</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/KvCUCkQ4tUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  )
  responsive(
    "pinterest",
    "(max-width: 400px)",
    `<a class="title" href="https://www.pinterest.com.mx/pin/116741815331059678/"> Ver video en Pinterest 😊</a>`,
    `<iframe src="https://assets.pinterest.com/ext/embed.html?id=116741815331059678" height="520" width="236" frameborder="0" scrolling="no" ></iframe>`
  )
  responsiveTester("responsive-form")
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