const cl = console.log;
export default function getCamara(container,error) {
  const $video = document.getElementById(container),
  $message = document.querySelector(error)
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream)=> {
        $video.srcObject = stream;
        // $video.play() -------> tambien puede ser, pero use autoplay en HTML
      })
      .catch((err) =>{
       $video.style.display = 'none'
        $message.style.display = 'block'
      });
  }
}
