const d = document;
export default function activarReloj(
  reloj,
  initReloj,
  stopReloj,
  alarma,
  initAlarma,
  stopAlarma,
  sonido
) {
 let relojInterval, alarmTimeout,
 audioTag = d.createElement('audio')
 audioTag.setAttribute("src", sonido);
  d.addEventListener("click", (e) => {
    
    if (e.target.matches(initReloj)) {
      d.querySelector(reloj).classList.add("activo","title");
      d.querySelector(initReloj).setAttribute("disabled", "true");
      d.querySelector(stopReloj).removeAttribute("disabled");

      relojInterval = setInterval(() => {
        let hoy = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `<h3>${hoy}</h3>`;
      }, 1000);
    }
    if (e.target.matches(stopReloj)) {
      d.querySelector(reloj).classList.remove("activo");
      d.querySelector(initReloj).removeAttribute("disabled");
      d.querySelector(stopReloj).setAttribute("disabled", "true");
      d.querySelector(reloj).innerHTML = null;
      clearInterval(relojInterval)
    }
    if (e.target.matches(initAlarma)) {
      d.querySelector(alarma).classList.add("activo");
      d.querySelector(initAlarma).setAttribute("disabled", "true");
      d.querySelector(stopAlarma).removeAttribute("disabled");
      alarmTimeout = setTimeout(() => {
       audioTag.play()
      }, 1000);
    }
    if (e.target.matches(stopAlarma)) {
      d.querySelector(alarma).classList.remove("activo");
      d.querySelector(initAlarma).removeAttribute("disabled");
      d.querySelector(stopAlarma).setAttribute("disabled", "true");
      audioTag.pause()
      audioTag.currentTime = 0
      clearTimeout(alarmTimeout)
    }
  });
}
