
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (i) {
        playKey(this.innerHTML);
        keyFlash(this.innerHTML);
    });

   
}

document.addEventListener('keypress', function(event) {
    playKey(event.key);
    keyFlash(event.key);
});

function playKey(keyboardKey) {
    switch (keyboardKey) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("Invalid Key!");
            break;
    }
}

function keyFlash(keyboardKey) {
    var keyClass = "."+keyboardKey;
    var currKey = document.querySelector(keyClass);
    currKey.classList.add("pressed");
    setTimeout(function(){currKey.classList.remove("pressed");},100);
}