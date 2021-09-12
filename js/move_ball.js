let x = 0,
  y = 0;

export default function moveBall(e, ball, canva, final, msj) {
  const $ball = document.querySelector(ball),
    $stage = document.querySelector(canva),
    limitStage = $stage.getBoundingClientRect(),
    limitBall = $ball.getBoundingClientRect(),
    $apple = document.querySelector(final),
    appleX = $apple.getBoundingClientRect().x,
    appleY = $apple.getBoundingClientRect().y,
    $msj = document.querySelector(msj);
  switch (e.keyCode) {
    case 37: // left code
      if (limitBall.left >= `${limitStage.left + 35}`) {
        e.preventDefault();
        x--;
      }
      break;
    case 38: // up code
      if (limitBall.top >= `${limitStage.top + 30}`) {
        e.preventDefault();
        y--;
      }
      break;
    case 39: // right code
      if (limitBall.right <= `${limitStage.right - 35}`) {
        e.preventDefault();
        x++;
      }
      break;
    case 40: // down code
      if (limitBall.bottom <= `${limitStage.bottom - 30}`) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 5}px,${y * 5}px)`;
  if (
    Math.round(limitBall.x) === Math.round(appleX + 1) &&
    Math.round(limitBall.y) === Math.round(appleY - 1)
  ) {
    $apple.style.display = "none";
    $ball.classList.add("winner");
    $msj.style.display = "block";
  }
  if (e.key === "c" && e.ctrlKey === true) {
    e.preventDefault();
    $ball.classList.toggle("color");
  }
  if (e.key === "b" && e.ctrlKey === true) {
    e.preventDefault();
    $ball.classList.toggle("border");
  }
  if (e.key === "d" && e.ctrlKey) {
    e.preventDefault();
    document.querySelector("html").classList.toggle("dark");
    localStorage.setItem(
      "dark-theme",
      `${
        document.querySelector("html").classList.contains("dark")
          ? "true"
          : "false"
      }`
    );
  }
  if (e.key === "m" && e.ctrlKey) {
    e.preventDefault();
    document.querySelector("#btn-menu").classList.toggle("is-active");
    document.querySelector("#menu").classList.toggle("is-active");
  }
  if (e.key === "h" && e.ctrlKey) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }
}
