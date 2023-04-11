let arr = new Array();
arr = document.querySelectorAll(".drum");
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
        var buttonName = this.innerHTML;
        makeSound(buttonName);
        buttonAnimation(buttonName);
    
    });

        function makeSound(key){
        switch (key) {
            case "w":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
    }
}

document.addEventListener("keypress", function (event) {
    makeSoundKey(event.key);
    buttonAnimation(event.key);
});
function makeSoundKey(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}


function buttonAnimation(currentkey){
    var recentButton = document.querySelector("."+currentkey);
    recentButton.classList.add("pressed");
}
