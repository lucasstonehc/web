var btnCheck = document.getElementById("btnCheck")
var number = document.querySelector("input")
var isClicked = false
btnCheck.addEventListener("click",()=>{
    let num = parseInt(number.value)
    if(isClicked){
        document.getElementById("ok").style.visibility = "hidden"
        document.getElementById("fizz").style.visibility = "hidden"
        document.getElementById("buzz").style.visibility = "hidden"
    }
    if((num % 3 === 0) && (num % 5 === 0)){
        document.getElementById("fizz").style.visibility = "visible"
        document.getElementById("buzz").style.visibility = "visible"
    }else if(num % 3 === 0){
        document.getElementById("fizz").style.visibility = "visible"
    }else if(num % 5 === 0){
        document.getElementById("buzz").style.visibility = "visible"
    }else {
        document.getElementById("ok").style.visibility = "visible"
    }
    
    isClicked = true
})