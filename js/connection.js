const d = document,
  w = window
export default function connection(online, offline) {
  const $online = d.getElementById(online),
    $offline = d.getElementById(offline);
  w.addEventListener("offline", (e) => {
    $offline.classList.add("offline"); // ----> esta clase se puede pedir en el parametro
  });
  w.addEventListener("online", (e) => {
    $online.classList.add("online"); // ----> esta clase se puede pedir en el parametro
    $offline.classList.remove("offline");
    setTimeout(() => {
      $online.classList.remove("online");
    }, 5000);
  });
}
