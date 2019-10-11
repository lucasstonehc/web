
var house = document.getElementById("increase")
var count = 0
house.addEventListener("click",()=>{
    count += 1
    document.getElementById("lblLikes").innerText = count +" likes"
})
