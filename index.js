let numberOfFrumButtons = document.querySelectorAll(".drum").length;
let numverOfPianoButtuns = document.querySelectorAll(".piano").length;

const instruments = {
    q: new Audio(`sounds/kick-bass.mp3`),
    w: new Audio('sounds/snare.mp3'),
    e: new Audio('sounds/tom-1.mp3'),
    r: new Audio('sounds/tom-2.mp3'),
    t: new Audio('sounds/tom-3.mp3'),
    y: new Audio('sounds/tom-4.mp3'),
    u: new Audio('sounds/crash.mp3'),
    z: new Audio('sounds/piano/c.mp3'),
    s: new Audio('sounds/piano/c1.mp3'),
    x: new Audio('sounds/piano/D.mp3'),
    d: new Audio('sounds/piano/D1.mp3'),
    c: new Audio('sounds/piano/E.mp3'),
    v: new Audio('sounds/piano/F.mp3'),
    g: new Audio('sounds/piano/F1.mp3'),
    b: new Audio('sounds/piano/G.mp3'),
    h: new Audio('sounds/piano/G1.mp3'),
    n: new Audio('sounds/piano/A.mp3'),
    j: new Audio('sounds/piano/A1.mp3'),
    m: new Audio('sounds/piano/B.mp3'),
    play: (sound) => sound.play(),
}

for (let i = 0; i < numberOfFrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerText;
        bA(buttonInnerHTML); 
    });
}

for (let a = 0; a < numverOfPianoButtuns; a++) {
    document.querySelectorAll(".piano")[a].addEventListener('click', function () {
        let buttonPianoInner = this.innerText;
        bA(buttonPianoInner);   
    });
}

document.addEventListener('keydown', function (event) {
    bA(event.key);    
});

function buttonAnimtion(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

function bA(key){
    instruments.play(instruments[key]);
    buttonAnimtion(key); 
}