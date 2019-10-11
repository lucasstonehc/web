
var valuesOfWorks = document.getElementsByTagName("input")

var btnCalculate = document.getElementById("calculate")
btnCalculate.addEventListener("click",()=>{
    let answer = (parseFloat(valuesOfWorks[0].value)+ parseFloat(valuesOfWorks[1].value)+parseFloat(valuesOfWorks[2].value))/3
    document.querySelector("p").innerText = answer
})
