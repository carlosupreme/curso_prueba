export default function darkmode(btn, doc) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)||e.target.matches(`${btn} *`)) {
     document.querySelector(doc).classList.toggle('dark')
    }
  });
}
