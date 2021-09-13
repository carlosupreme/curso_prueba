const d = document,
w = window,
userA = navigator.userAgent
export default function userDevice(container, clase, clase2) {
  let sBrowser
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
    }

  $container.innerHTML = `
  <h4 style="text-decoration: none;" class=${clase}>Tienes un dispositivo:<span class="${clase2}"> 
  ${
    mobile.any() 
    ? `${mobile.any()} 📱` 
    : `${desktop.any()} 💻`
  }
  </span></h4>`

  // contenido exclusivo
  if (mobile.android()) {
    $container.innerHTML += `
    <h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${mobile.android()}</h4>`;
    // redireccion asi:
    // alert(`Vas a ser redirigido a la pagina especial para ${mobile.android()}`)
    // w.location.href = "https://github.com/carlosupreme"
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
  if (userA.indexOf("Firefox") > -1) sBrowser = "Mozilla Firefox";
  else if (userA.indexOf("SamsungBrowser") > -1) sBrowser = "Samsung Internet";
  else if (userA.indexOf("Opera") > -1 || userA.indexOf("OPR") > -1) sBrowser = "Opera";
  else if (userA.indexOf("Trident") > -1) sBrowser = "Microsoft Internet Explorer";
  else if (userA.indexOf("Edge") > -1) sBrowser = "Microsoft Edge (Legacy)";
  else if (userA.indexOf("Edg") > -1) sBrowser = "Microsoft Edge (Chromium)";
  else if (userA.indexOf("Chrome") > -1) sBrowser = "Google Chrome o Chromium";
  else if (userA.indexOf("Safari") > -1) sBrowser = "Apple Safari";
  else sBrowser = `Ohh parece que tu navegador no lo conozco ☹`;
  $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}>Estás usando un navegador basado en:<span class="${clase2}"> ${sBrowser}</span></h4>`;
}