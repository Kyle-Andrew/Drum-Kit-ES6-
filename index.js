var drumButtons = [];
drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(function(item, index) {
    drumButtons[index].addEventListener("click", function(){

        playSound(this.innerHTML);
        animateButton(this.innerHTML);

    }) 
})

var isPressed = false;

document.addEventListener("keydown", function(event) {

   if (isPressed) return;
   isPressed = true;

   playSound(event.key);
   animateButton(event.key);
       
})

document.addEventListener("keyup", function() {
    isPressed = false;
})

function playSound (drumKey) {

    switch (drumKey) {
        case "w":
            
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();

            break;
                
        case "a":
            
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();      
                    
            break;
        
        case "s":

            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();

            break;

        case "d":

            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();

            break;

        case "j":
            
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();

            break;
        
        case "k":

            var snare = new Audio('./sounds/snare.mp3');
            snare.play();

            break;

        case "l":

            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();

            break;

        default:

            console.log(drumKey);

            break;
    }

}

function animateButton(drumKey) {

    document.querySelector("." + drumKey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + drumKey).classList.remove("pressed");
    }, 100);

}