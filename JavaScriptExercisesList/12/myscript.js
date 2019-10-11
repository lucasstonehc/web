
var valuesOfWorks = document.getElementsByTagName("input")

var btnCalculate = document.getElementById("calculate")
btnCalculate.addEventListener("click",()=>{
    let answer = (parseFloat(valuesOfWorks[0].value)+ parseFloat(valuesOfWorks[1].value)+parseFloat(valuesOfWorks[2].value))/3
    if(answer>=90){
        document.getElementsByTagName("p")[1].innerText = "A"
    }else if(answer>=70 && answer<90){
        document.getElementsByTagName("p")[1].innerText = "B"
    }else if(answer>=60 && answer<70){
        document.getElementsByTagName("p")[1].innerText = "C"
    }else if(answer>=40 && answer<60){
        document.getElementsByTagName("p")[1].innerText = "D"
    }else{
        document.getElementsByTagName("p")[1].innerText = "E"
    }
    document.getElementsByTagName("p")[0].innerText = answer
})
