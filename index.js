//VARIABLES
const d=document,
darkModeBtn = d.querySelector(".darkmode-btn"),
html = d.querySelector("html")
//EVENT LISTENERS
d.addEventListener("DOMContentLoaded", ()=>{
 darkModeBtn.addEventListener('click',darkMode)
})
//FUNCTIONS
function darkMode(e){
 e.preventDefault()
 html.classList.toggle("dark");
}


