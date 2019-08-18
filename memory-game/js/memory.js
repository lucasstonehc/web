

images_paths = [
    "images/ai.png",
    "images/artificial-intelligence.png",
    "images/blackhole.png",
    "images/chip.png",
    "images/network.png",
    "images/network-p.png",
    "images/robotic.png",
    "images/roboto.png",
    "images/solar-system.png",
    "images/ai-2.png",
    "images/artificial-intelligence-2.png",
    "images/blackhole-2.png",
    "images/chip-2.png",
    "images/network-2.png",
    "images/network-p-2.png",
    "images/robotic-2.png",
    "images/roboto-2.png",
    "images/solar-system-2.png",
]

function fillGame(){
    let numbers = []
    for (i = 0; i <= 17; i++){
        numbers[i] = i;
    }
    numbers.sort(function() {
        return .17 - Math.random();
    });
    for (i = 0; i <= 17; i++) { 
        element =  document.getElementById(String(i)).querySelector("img")
        element.setAttribute("src",images_paths[numbers[i]]);
        console.log(i)
    }
}

function game(){
    var update = false;
    var start = false;
    var score = 0;

    if(start == false){
        fillGame()
    }
}


game()


