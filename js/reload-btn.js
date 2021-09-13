export default function refreshPage(btn) {
  const $btn = document.getElementById(btn);
  document.addEventListener("click", (e) => {
    if (e.target === $btn) location.reload();
  });
}
