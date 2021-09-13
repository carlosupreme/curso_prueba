const d = document,
  n = navigator;
export default function getLocation(container) {
  const $container = d.getElementById(container);
  if ("geolocation" in n) {
    /* geolocation is available */
    const success = (position) => {
      const $mapLink = d.createElement("a"),
        latitud = position.coords.latitude,
        longitud = position.coords.longitude,
        precision = Math.round(position.coords.accuracy),
        maps = [latitud, longitud].join();
      $container.innerHTML = `
      <ul class="section">
        <li class="title">Longitud: <span class="text-main">${longitud}</span> </li>
        <li class="title">Latitud: <span class="text-main">${latitud}</span></li>
        <li class="title">Precisión: <span class="text-main">${precision} mts.</span></li>
      </ul>`;

      $mapLink.textContent = "Ver en Google Maps... 👀👀👀";
      $mapLink.target = "blank";
      $mapLink.href = `https://www.google.com.mx/maps/@${maps},20z`;
      $mapLink.classList.add("title", "first");
      $container.append($mapLink);
    };
    const error = (e) => $container.innerHTML = `<h3 class="text-main first">Parece ser que alguien no quiere dar su ubicación 😒</h3>`;

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0
    }
    n.geolocation.getCurrentPosition(success, error,options);
  } else {
    /* geolocation is not available */
    $container.innerHTML = `<h3 class="text-main first">Parece ser que alguien no quiere dar su ubicación 😒</h3>`;
  }
}
