const d = document,
  w = window,
  userA = navigator.userAgent;
export default function userDevice(container, clase, clase2) {
  let sBrowser,sDesktop, sMobile
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
    };

  // contenido exclusivo
  if(mobile.any()){
    sDesktop = null
    if (mobile.android()) sMobile = mobile.android()
    else if (mobile.iOs()) sMobile = mobile.iOs()
    else if (mobile.windows()) sMobile = mobile.windows()
    // redireccion asi:
    // w.location.href = "https://github.com/carlosupreme"
  }
  // desktop
  else if (desktop.any()){
    sMobile = null
    if(desktop.windows()) sDesktop = desktop.windows()
    else if (desktop.mac()) sDesktop = desktop.mac()
    else if (desktop.linux()) sDesktop = desktop.linux()
  }
  // browser
  if (userA.indexOf("Firefox") > -1) sBrowser = "Mozilla Firefox";
  else if (userA.indexOf("SamsungBrowser") > -1) sBrowser = "Samsung Internet";
  else if (userA.indexOf("Opera") > -1 || userA.indexOf("OPR") > -1)
    sBrowser = "Opera";
  else if (userA.indexOf("Trident") > -1)
    sBrowser = "Microsoft Internet Explorer";
  else if (userA.indexOf("Edge") > -1) sBrowser = "Microsoft Edge (Legacy)";
  else if (userA.indexOf("Edg") > -1) sBrowser = "Microsoft Edge (Chromium)";
  else if (userA.indexOf("Chrome") > -1) sBrowser = "Google Chrome o Chromium";
  else if (userA.indexOf("Safari") > -1) sBrowser = "Apple Safari";
  else sBrowser = `Ohh parece que tu navegador no lo conozco ☹`;

  $container.innerHTML = `<h4 style="text-decoration: none;" class=${clase}>Tienes un dispositivo:<span class="${clase2}"> 
  ${mobile.any() 
    ? `${mobile.any()} 📱` 
    : `${desktop.any()} 💻`
  }</span></h4>`;
  $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}>Estás usando un navegador...<span class="${clase2}"> ${sBrowser}?</span></h4>`;
  $container.innerHTML += `<h4 style="text-decoration: none;" class=${clase}> Este texto solo se ve en ${sDesktop?sDesktop:sMobile}</h4>`;
}
