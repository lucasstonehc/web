
var img = document.getElementById("img")
img.addEventListener("mouseover", ()=>{
    document.querySelector("img").setAttribute("src","wizard-color.png")
})
img.addEventListener("mouseleave", ()=>{
    document.querySelector("img").setAttribute("src","wizard.png")
})