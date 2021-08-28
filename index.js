//VARIABLES
const d=document,
darkModeBtn = d.querySelector(".darkmode-btn"),
html = d.querySelector("html"),
randomBtn = d.querySelector("#random"),
randomSection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//EVENT LISTENERS
d.addEventListener("DOMContentLoaded", ()=>{
 darkModeBtn.addEventListener('click',darkMode)
 randomBtn.addEventListener('click', getRandomSection)
})

//FUNCTIONS
function darkMode(e){
 e.preventDefault()
 html.classList.toggle("dark");
}

function getRandomSection(){
  let seccion = Math.round((Math.random())*14)+1
  let href = `#section${seccion}`
  randomBtn.setAttribute('href',href)
}
