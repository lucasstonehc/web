

var tds = document.getElementsByTagName("td")
var tdsFinal = [tds[4],tds[7],tds[10],tds[13],tds[16]]
var buttons = document.getElementsByTagName("button")
for(let i=0;i<buttons.length;){
    buttons[i].addEventListener("click",()=>{
        tdsFinal[(i/2)-1].innerText = parseInt(tdsFinal[(i/2)-1].textContent) + 1
    })
    i+=2
}
for(let i=1;i<=buttons.length;){
    buttons[i].addEventListener("click",()=>{
        tdsFinal[((i-1)/2)-1].innerText = parseInt(tdsFinal[((i-1)/2)-1].textContent) - 1
    })
    i+=2
}

