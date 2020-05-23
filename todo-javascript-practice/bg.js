const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function paintImage(imageNum) {
    const image = new Image();
    image.src = `./img/${imageNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

}

function genRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number;
}

function init() {
    const currentNumber = genRandom();
    paintImage(currentNumber);
}
init();