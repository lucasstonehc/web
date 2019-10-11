
var btnGreen = document.getElementById("green");
var btnOrange = document.getElementById("orange");

btnGreen.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#85e085";
});

btnOrange.addEventListener("click", ()=> {
    document.querySelector("body").style.backgroundColor = "#ff8533";
});