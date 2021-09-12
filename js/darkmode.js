const miStorage = localStorage;
let darkTheme;

export default function darkmode(btn, doc, clase) {
  const light = () => {
      document.querySelector(doc).classList.remove(clase);
      miStorage.setItem("dark-theme", "false");
    },
    dark = () => {
      document.querySelector(doc).classList.add(clase);
      miStorage.setItem("dark-theme", "true");
    };
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if (document.querySelector(doc).classList.contains(clase)) {
        light();
      } else {
        dark();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    if (miStorage.getItem("dark-theme") === null)
      miStorage.setItem("dark-theme", "false");
    if (miStorage.getItem("dark-theme") == "true") dark();
    if (miStorage.getItem("dark-theme") == "false") light();
  });
}
