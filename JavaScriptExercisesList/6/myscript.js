
var img = document.querySelector("img")
var btnFirefox = document.getElementById("firefox")
var btnIceweasel = document.getElementById("iceweasel")

btnFirefox.addEventListener("click", ()=>{
    img.setAttribute("src","firefox.png")
})
btnIceweasel.addEventListener("click", ()=>{
    img.setAttribute("src","iceweasel.png")
})
