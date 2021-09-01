//VARIABLES
const d=document,
darkModeBtn = d.querySelector(".darkmode-btn"),
html = d.querySelector("html"),
randomBtn = d.querySelector("#random"),
searchBtn = d.querySelector("#searchBtn"),
searchContainer = d.querySelector(".search-container"),
footer = d.querySelector("footer"),
buscarEnSearch = d.querySelector(".search-input span"),
inputEnSearch = d.querySelector(".search-input input")
//EVENT LISTENERS
d.addEventListener("DOMContentLoaded", ()=>{
 darkModeBtn.addEventListener('click',darkMode)
 randomBtn.addEventListener('click', getRandomSection)
 searchBtn.addEventListener('click', deploySearchContainer)
 buscarEnSearch.addEventListener('click', buttonOnclick)
})
//FUNCTIONS
function darkMode(e){
 e.preventDefault()
 html.classList.toggle("dark")
}

function getRandomSection(){
  let seccion = Math.round((Math.random())*14)+1 //devuelve un numero random de [1-15]
  let href = `#section${seccion}` //se le asigna al href del enlace
  randomBtn.setAttribute('href',href)
}
function deploySearchContainer(){
  if(buscarEnSearch.classList.contains("onclick") === true){
    buscarEnSearch.classList.remove("onclick")
  }
  searchBtn.removeAttribute("href")
  searchContainer.classList.toggle("is-active")
}
function buttonOnclick(){
  buscarEnSearch.classList.add("onclick")
  searchContainer.classList.toggle("is-active")
  setTimeout(()=>{
    inputEnSearch.value = ""
  },300)
}