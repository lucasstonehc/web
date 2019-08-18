var myTitle =  document.querySelector("h1");
myTitle.innerHTML = "hello world@";


var add = function(x, y){
    return x+y;
}


alert(add(5,10))

var sum = (x,y) => { return x+y}
alert(sum(5,1))

document.getElementById('btn').onclick = ()=> {console.log("hello world buddy")}


var image = document.querySelector('img');

image.addEventListener('click', function() {
    console.log('fuck up');
  if (image.getAttribute("src") === "images/gnu1.png") {
     image.setAttribute("src","images/gnu2.jpg");
     console.log('fuck up');
  } else {
     image.src = "images/gnu1.png";
  }
});

