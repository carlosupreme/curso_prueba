const d = document,
w = window,
n = navigator
export default function connection(online,offline){
 const $online = d.getElementById(online),
 $offline = d.getElementById(offline)
 w.addEventListener('offline',e=>{
  $offline.classList.add('offline')
 })
 w.addEventListener('online',e=>{
  $online.classList.add('online')
  $offline.classList.remove('offline')
  setTimeout(() => {
   $online.classList.remove('online')
  }, 5000);
 })
}