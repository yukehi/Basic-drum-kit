let numberOfFrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfFrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener('click', function () {

        let buttonInnerHTML = this.innerText;

        makeSound(buttonInnerHTML);

        buttonAnimtion(buttonInnerHTML);


    });


}

document.addEventListener('keydown', function (event) {

    makeSound(event.key);
    buttonAnimtion(event.key);

})

function makeSound(key) {
    switch (key) {
        case "w":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "a":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 's':
            let tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;

        case "d":
            let tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;

        case "j":
            let tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;

        case "k":
            let tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;

        case "l":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default:
            console.log
            break;
    }

}

function buttonAnimtion(currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add('pressed');

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}