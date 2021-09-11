let x = 0,
  y = 0;

export default function moveBall(e, ball, canva) {
  const $ball = document.querySelector(ball),
    $stage = document.querySelector(canva),
    limitStage = $stage.getBoundingClientRect(),
    limitBall = $ball.getBoundingClientRect();
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
  $ball.style.transform = `translate(${x * 9}px,${y * 5}px)`;
}
