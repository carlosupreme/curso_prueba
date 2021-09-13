export default function countdown(container, date, message) {
  const $container = document.querySelector(container),
    intervalo = setInterval(() => {
      const firstDate = new Date(date);
      let today = new Date(),
        limite = firstDate - today,
        segundos = Math.floor((limite / 1000) % 60),
        minutos = Math.floor((limite / 1000 / 60) % 60),
        horas = Math.floor((limite / 1000 / 60 / 60) % 24),
        dias = Math.floor(limite / 1000 / 60 / 60 / 24);

      $container.textContent = `Faltan ${dias} días ${
        horas <= 9 ? "0" + horas : horas
      } horas ${minutos <= 9 ? "0" + minutos : minutos} minutos ${
        segundos <= 9 ? "0" + segundos : segundos
      } segundos.`;
      if (limite <= 0) {
        $container.textContent= `${message}`;
        clearInterval(intervalo);
      }
    }, 1000);
}