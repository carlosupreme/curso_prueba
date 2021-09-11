const $span = document.querySelectorAll("#section1 .time"),
  navidad2021 = "25 dec 2021, 00:00:00",
  añoNuevo2022 = "1 Jan 2022, 00:00:00";

export default function countdown() {
  setInterval(() => {
    const navidad = new Date(navidad2021),
      newyear = new Date(añoNuevo2022);
    let hoy = new Date(),
      segundos = Math.floor(((navidad - hoy) / 1000) % 60), // navidad
      minutos = Math.floor(((navidad - hoy) / 1000 / 60) % 60), // navidad
      horas = Math.floor(((navidad - hoy) / 1000 / 60 / 60) % 24), // navidad
      dias = Math.floor((navidad - hoy) / 1000 / 60 / 60 / 24), // navidad
      seconds = Math.floor(((newyear - hoy) / 1000) % 60), // new Year
      minutes = Math.floor(((newyear - hoy) / 1000 / 60) % 60), // new Year
      hours = Math.floor(((newyear - hoy) / 1000 / 60 / 60) % 24), // new Year
      days = Math.floor((newyear - hoy) / 1000 / 60 / 60 / 24); // new Year

    $span[0].innerHTML = dias; // navidad
    $span[1].innerHTML = horas; // navidad
    $span[2].innerHTML = minutos; // navidad
    $span[3].innerHTML = segundos; // navidad
    $span[4].innerHTML = days; // new Year
    $span[5].innerHTML = hours; // new Year
    $span[6].innerHTML = minutes; // new Year
    $span[7].innerHTML = seconds; // new Year
  }, 1000);
}
