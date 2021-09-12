const d = document,
  w = window,
  userA = navigator.userAgent;
export default function userDevice(container, clase, clase2,tiempo) {
  clase = `"${clase}"`;
  const $container = d.getElementById(container),
    mobile = {
      android: () => userA.match(/android/i),
      iOs: () => userA.match(/ipod|ipad|iphone/i),
      windows: () => userA.match(/windows phone/i),
      any: function () {
        return this.android() || this.iOs() || this.windows();
      },
    },
    desktop = {
      linux: () => userA.match(/linux/i),
      windows: () => userA.match(/windows nt/i),
      mac: () => userA.match(/mac os/i),
      any: function () {
        return this.linux() || this.windows() || this.mac();
      },
    },
    browser = {
      chrome: () => userA.match(/chrome/i),
      opera: () => userA.match(/opera|opr/i),
      firefox: () => userA.match(/firefox/i),
      edge: () => userA.match(/edge/i),
      safari: () => userA.match(/safari/i),
      ie: () => userA.match(/msie|iemobile/i),
      any: function () {
        return (
          this.chrome() ||
          this.opera() ||
          this.firefox() ||
          this.edge() ||
          this.safari() ||
          this.ie()
        );
      },
    };

  $container.innerHTML = `
  <h4 style="text-decoration: none;" class=${clase}>Tienes un dispositivo:<span class="${clase2}"> ${
    mobile.any() ? `${mobile.any()} 📱` : `${desktop.any()} 💻`
  }</span></h4>
  <h4 style="text-decoration: none;" class=${clase}>Estás usando un navegador basado en:<span class="${clase2}"> ${browser.any()}</span></h4>`;

  // contenido exclusivo
  if (mobile.android()) {
    $container.innerHTML += `
    <h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${mobile.android()}</h4>`;
    setTimeout(()=>{
      // w.location.href = "https://github.com/carlosupreme"
      alert(`Vas a ser redirigido a la pagina especial para ${mobile.android()}`)
    },tiempo)
  }
  if (mobile.iOs()) {
    $container.innerHTML += `
    <h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${mobile.iOs()}</h4>`;
  }
  if (mobile.windows()) {
    $container.innerHTML += `
   <h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${mobile.windows()}</h4>`;
  }
  // desktop
  if (desktop.windows()) {
    $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${desktop.windows()}</h4>`;
  }
  if (desktop.linux()) {
    $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${desktop.linux()}</h4>`;
  }
  if (desktop.mac()) {
    $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${desktop.mac()}</h4>`;
  }
  // browser
  if (browser.chrome()) {
    $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${browser.chrome()}</h4>`;
  }
  if (browser.opera()) {
    $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${browser.opera()}</h4>`;
  }
  if (browser.safari()) {
    $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${browser.safari()}</h4>`;
  }
  if (browser.edge()) {
    $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${browser.edge()}</h4>`;
  }
}
