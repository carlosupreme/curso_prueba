const d = document
export default function sortear(players, start, reset,claseWinner){
 const $players = d.querySelectorAll(players)
 d.addEventListener('click',e=>{
  if(e.target.matches(start)){
   d.querySelector(start).setAttribute("disabled","true")
   d.querySelector(reset).removeAttribute("disabled")
   const numeroGanador = Math.floor(Math.random() * $players.length)
   setTimeout(()=>{
    $players[numeroGanador].classList.add(claseWinner)
   },1000)
  }

  if(e.target.matches(reset)){
   $players.forEach(el=>el.classList.remove(claseWinner))
   d.querySelector(reset).setAttribute("disabled","true")
   d.querySelector(start).removeAttribute("disabled")
  }
//---------tambien funciona asi ------
  // function getWinner(container){
  //  const players= document.querySelectorAll(container)
  //  const ganador = Math.floor(Math.random() * players.length)
  //  return `El ganador es: ${players[ganador].textContent}`
  // }



 })
}