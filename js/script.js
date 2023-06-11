const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const body = document.querySelector("body");
const cssText = document.querySelector("h3");

const button = document.querySelector("button");

function randomGenerator(val) {
    return Math.floor(Math.random() * (val + 1)).toString(16).padStart(2, "0");
}

function rgbGenerator() {
    r = randomGenerator(255);
    g = randomGenerator(255);
    b = randomGenerator(255);
    return `#${r}${g}${b}`;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value + ", "
        + color2.value + ")";

    cssText.textContent = body.style.background + ";";
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", function () {
    while (true) {
        color1.value = rgbGenerator();
        color2.value = rgbGenerator();

        if (color1.value !== color2.value)
            break;
    }
    setGradient();
});