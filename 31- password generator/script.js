const clipboard = document.querySelector('.clipboard-btn');
const display = document.getElementById('generatedPassword');
const passwordLength = document.getElementById('length');
const uppercaseCB = document.getElementById('uppercase');
const lowercaseCB = document.getElementById('lowercase');
const numbersCB = document.getElementById('numbers');
const symbolsCB = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');

let randomPassword = '';

const numbers = "123456789";
const symbols = "! @#$%^&*()_-+={[}]|\:;'<,>.?/";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let parameters = [];

let passwordParameters = {
    length: Number(passwordLength.value),
    uppercase: uppercaseCB.checked,
    lowercase: lowercaseCB.checked,
    numbers: numbersCB.checked,
    symbols: symbolsCB.checked
}

clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(randomPassword);
    alert('Password copied to Clipboard!');
})

passwordLength.addEventListener('input', () => {
    passwordParameters.length = Number(passwordLength.value);
});

uppercaseCB.addEventListener('click', () => {
    passwordParameters.uppercase = uppercaseCB.checked;
});

lowercaseCB.addEventListener('click', () => {
    passwordParameters.lowercase = lowercaseCB.checked;
});

symbolsCB.addEventListener('click', () => {
    passwordParameters.symbols = symbolsCB.checked;
});

numbersCB.addEventListener('click', () => {
    passwordParameters.numbers = numbersCB.checked;
});

generateBtn.addEventListener('click', generateRandomPassword);

function generateRandomPassword() {
    randomPassword = '';
    reset();
    initializeSettings();
    // loop over the total length and choose random values
    let i = 0;
    for (i; i < passwordParameters.length; i++) {
        let randomChar = getRandomChar();
        randomPassword += randomChar;
    }
    displayPassword();
}

function getRandomChar() {
    const randomSet = parameters[Math.floor(Math.random() * parameters.length)];
    const randomElement = randomSet[Math.floor(Math.random() * randomSet.length)];

    return randomElement;
}

function reset() {
    parameters = [];
}

function initializeSettings() {
    if (passwordParameters.lowercase) {
        parameters.push(alphabet.toUpperCase());
    }
    if (passwordParameters.uppercase) {
        parameters.push(alphabet.toLowerCase());
    }
    if (passwordParameters.symbols) {
        parameters.push(symbols);
    }
    if (passwordParameters.numbers) {
        parameters.push(numbers)
    }
}

function displayPassword() {
    display.innerHTML = randomPassword;
}
