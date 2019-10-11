

var btnNumber = document.getElementById("btnNumber")
btnNumber.addEventListener("click",()=>{
    let number = document.getElementById("iptNumber").value
    if(number % 2 == 0){
        document.getElementById("result").innerText = "PAIR"
    }else{
        document.getElementById("result").innerText = "ODD"
    }
});
