export default function stopWatch(
  msContainer,
  secContainer,
  minContainer,
  playBtn,
  stopBtn,
  restartBtn
) {
  const $containerMs = document.querySelector(msContainer),
    $containerSec = document.querySelector(secContainer),
    $containerMin = document.querySelector(minContainer);
  let intervalo,
    ms = 0,
    seg = 0,
    min = 0;
  document.addEventListener("click", (e) => {
    if (e.target.matches(playBtn)) {
      // play
      document.querySelector(playBtn).disabled = true;
      document.querySelector(stopBtn).disabled = false;
      document.querySelector(restartBtn).disabled = true;
      intervalo = setInterval(() => {
        ms++;
        if (ms > 99) {
          ms = 0;
          seg++;
          if (seg > 59) {
            seg = 0;
            min++;
            if (min <= 9) {
              $containerMin.innerHTML = `0${min}`;
            } else {
              $containerMin.innerHTML = min;
            }
          } else {
            if (seg <= 9) {
              $containerSec.innerHTML = `0${seg}`;
            } else {
              $containerSec.innerHTML = seg;
            }
          }
        } else {
          if (ms <= 9) {
            $containerMs.innerHTML = `0${ms}`;
          } else {
            $containerMs.innerHTML = ms;
          }
        }
      }, 10);
    }
    if (e.target.matches(stopBtn)) {
      // stop
      document.querySelector(stopBtn).disabled = true;
      document.querySelector(playBtn).disabled = false;
      document.querySelector(restartBtn).disabled = false;
      clearInterval(intervalo);
    }
    if (e.target.matches(restartBtn)) {
      // restart
      document.querySelector(playBtn).disabled = false;
      document.querySelector(restartBtn).disabled = true;
      clearInterval(intervalo);
      $containerMin.innerHTML = "00";
      $containerSec.innerHTML = "00";
      $containerMs.innerHTML = "00";
      min = 0;
      seg = 0;
      ms = 0;
    }
  });
}
