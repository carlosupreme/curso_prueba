import darkmode from "./darkmode.js";
import countdown from "./countdown.js";
import deployMenu from "./menu_hamburguesa.js"
import activarReloj from "./clock_alarm.js";
import stopWatch from "./stop_watch.js";
document.addEventListener('DOMContentLoaded',(e)=>{
  // SECTION 1
  countdown()
  // SECTION 2
  stopWatch(".watch .ms",".watch .secs",".watch .mins",".buttons .play",".buttons .pause",".buttons .restart")
  // HAMBURGER BUTTON
  deployMenu("#btn-menu","#menu","#menu .menu-item","is-active")
  // SECCION 4 RELOJ Y ALARMA
  activarReloj("#section4 .reloj","#initClock","#stopClock",".alarma","#initAlarma","#stopAlarma","./assets/Despertador.mp3")
  // dark mode
  darkmode('.darkMode','html','dark')
})
