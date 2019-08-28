/*var myTitle =  document.querySelector("h1");
myTitle.innerHTML = "hello world@";


var add = function(x, y){
    return x+y;
}


alert(add(5,10))

var sum = (x,y) => { return x+y}
alert(sum(5,1))

document.getElementById('btn').onclick = () => {console.log("hello world buddy")}


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



console.log([1,2,3].map(x => x*2))

var yourTurn = "type your name and be happy"
*/
/*
var sum = document.getElementById('btn').addEventListener('click', () => console.log(3+5) )


document.querySelector('html').addEventListener('click',() => console.log('I´m live'))


var image = document.querySelector('img');

image.addEventListener('click', function() {
    console.log('fuck up');
  if (image.getAttribute("src") === "images/gnu1.png") {
     image.setAttribute("src","images/gnu2.jpg");
     console.log('fuck up');
  } else {
   image.setAttribute("src", "images/gnu1.png");
  }
});*/


var head = document.getElementById('n')

function defineName() {
   var name  =  prompt('Please. type your name!')
   localStorage.setItem('name', name)
   head.innerHTML = 'Open Source ' + name
}

if (!localStorage.getItem('name')) {
   defineName()
} else {
   var name = localStorage.getItem('name')
   head.innerHTML = 'Open Source ' + name
}

var buttonUserName = document.getElementById('btn-name').onclick  = () =>  {defineName()}
