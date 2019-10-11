
var btnMessage = document.getElementById("btnMessage")
var state = 0
btnMessage.addEventListener("click", ()=> {
    if(state === 0){
        document.getElementById("message").classList.remove("visible")
        state = 1
    }else {
        document.getElementById("message").classList.add("visible")
        state = 0
    }
})

