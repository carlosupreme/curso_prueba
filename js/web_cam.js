const cl = console.log;
export default function getCamara(container, error) {
  const $video = document.getElementById(container),
    $message = document.querySelector(error);
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        $video.srcObject = stream;
        setTimeout(() => {
          $message.innerHTML = `OMG you so ugly 🤮🤮🤮🤮🤮`;
          $message.style.display = "block";
          $message.classList.add("title");
        }, 3000);
        // $video.play() -------> tambien puede ser, pero use autoplay en HTML
      })
      .catch((err) => {
        $video.style.display = "none";
        $message.style.display = "block";
      });
  }
}
