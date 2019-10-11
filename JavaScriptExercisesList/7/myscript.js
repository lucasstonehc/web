
var house = document.getElementById("houses")

house.addEventListener("change",()=>{
    document.querySelector("img").setAttribute("src",house.value+".png")
})
