//VARIABLES
const d=document,
darkModeBtn = d.querySelector(".darkmode-btn"),
html = d.querySelector("html"),
randomBtn = d.querySelector("#random"),
searchBtn = d.querySelector("#searchBtn"),
searchContainer = d.querySelector(".search-container"),
footer = d.querySelector("footer"),
buscarEnSearch = d.querySelector(".search-input a"),
inputEnSearch = d.querySelector(".search-input input"),
sectionsNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 
//EVENT LISTENERS
d.addEventListener("DOMContentLoaded", ()=>{
 darkModeBtn.addEventListener('click',darkMode)
 randomBtn.addEventListener('click', getRandomSection)
 searchBtn.addEventListener('click', deploySearchContainer)
 buscarEnSearch.addEventListener('click', buttonOnclick)
 inputEnSearch.addEventListener('input', searching)
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
}
function searching(){
  let value = inputEnSearch.value
  value.toLowerCase()
  value.trim()
  let x = 'section'
  const sections = [`${x}1`,`${x}2`,`${x}3`,`${x}4`,`${x}5`,`${x}6`,`${x}7`,`${x}8`,`${x}9`,`${x}10`,`${x}11`,`${x}12`,`${x}13`,`${x}14`,`${x}15`]
  const unaSection = sections.splice(0,sections.length)
  for (let i = 0; i < unaSection.length; i++) {
    if(value.includes(unaSection[i])){
      buscarEnSearch.setAttribute('href',`#${value}`)
      setTimeout(()=>buscarEnSearch.click(),500)
    }else{
      break
    }
  }
  // console.log('ayuda')
}