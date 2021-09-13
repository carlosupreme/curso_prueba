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
        maps = [latitud, longitud].join();

      $container.innerHTML = `
      <ul class="section">
        <li class="title">Longitud: <span class="text-main">${longitud}</span> </li>
        <li class="title">Latitud: <span class="text-main">${latitud}</span></li>
      </ul>`;

      $mapLink.textContent = "Ver en Google Maps... 👀👀👀";
      $mapLink.target = "blank";
      $mapLink.href = `https://www.google.com.mx/maps/@${maps}`;
      $mapLink.classList.add("title", "first");
      $container.append($mapLink);
    };
    const error = (e) => $container.innerHTML = `<h3 class="text-main first">Parece ser que alguien no quiere dar su ubicación 😒</h3>`;
    n.geolocation.getCurrentPosition(success, error);
  } else {
    /* geolocation is not available */
    $container.innerHTML = `<h3 class="text-main first">Parece ser que alguien no quiere dar su ubicación 😒</h3>`;
  }
}
