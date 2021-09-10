import countdown from "./section1.js";
import deployMenu from "./section3.js"
import activarReloj from "./section4.js";
document.addEventListener('DOMContentLoaded',(e)=>{
  // SECTION 1
  countdown()
  // SECTION 2
  
  // SECTION 3 HAMBURGER BUTTON
  deployMenu("#btn-menu","#menu","#menu .menu-item")
  // SECCION 4 RELJ Y ALARMA
  activarReloj("#section4 .reloj","#initClock","#stopClock",".alarma","#initAlarma","#stopAlarma","./assets/Despertador.mp3")
})
