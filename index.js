
// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    })}    



// Detecting Keyboard Presses

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key)
})


function makeSound(key) {

    
        switch (key) {
             
            case "w": 
               var wAudio = new Audio("./sounds/tom-1.mp3");
               wAudio.play();

            break;
            
            case "a":
                var aAudio = new Audio("./sounds/tom-2.mp3");
                aAudio.play();
            break;
            
            case "s":
                var sAudio = new Audio("./sounds/tom-3.mp3");
                sAudio.play();
            break;

            case "d":
                var dAudio = new Audio("./sounds/tom-4.mp3");
                dAudio.play();
            break;

            case "j":
                var jAudio = new Audio("./sounds/snare.mp3");
                jAudio.play();
            break;

            case "k":
                var kAudio = new Audio("./sounds/crash.mp3");
                kAudio.play();
            break;

            case "l":
                var lAudio = new Audio("./sounds/kick-bass.mp3");
                lAudio.play();
            break;

           default: console.log(buttonInnerHTML);
        }
}    
    
function buttonAnimation (currentKey) {

    var activeButton =  document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}
   










// var wAudio = new Audio("./sounds/tom-1.mp3");
//        wAudio.play();