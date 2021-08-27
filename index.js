//VARIABLES
const d=document,
darkModeBtn = d.querySelector(".darkmode-btn"),
html = d.querySelector("html"),
currentTheme = localStorage.getItem("theme");
//EVENT LISTENERS
d.addEventListener("DOMContentLoaded", ()=>{
 if (currentTheme == "dark") {
  html.classList.add("dark")
 }
 darkModeBtn.addEventListener('click',darkMode)
})
//FUNCTIONS
function darkMode(e){
 html.classList.toggle("dark");
 let theme = "light";
 if (html.classList.contains("dark")) {
   theme = "dark";
 }
 localStorage.setItem("theme", theme);
}


