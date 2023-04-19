const speed = document.querySelector('.input');
const text = document.querySelector('.text');

const displayMotto = 'We Love Programming!';
let charIndex = 0;
let writeSpeed = 300;

speed.addEventListener('input', setSpeed);

let myInterval = setInterval(typeMotto, writeSpeed);

function reset() {
    text.innerHTML = '';
    charIndex = 0;
}

function setSpeed() {
    const speedInput = Number(speed.value);
    writeSpeed = scale(speedInput, 1, 10, 200, 20);
    reset();
    resetInterval();
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function typeMotto() {
    if (charIndex > displayMotto.length - 1) {
        reset();
        resetInterval();
    }
    text.innerHTML += displayMotto[charIndex];
    charIndex++;
}

function resetInterval() {
    clearInterval(myInterval);
    myInterval = setInterval(typeMotto, writeSpeed);
}