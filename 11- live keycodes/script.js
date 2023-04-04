const startContainer = document.querySelector('.start-container');
const elementsContainer = document.querySelector('.container');
const key = document.querySelector('#key');
const keyCode = document.querySelector('#key-code');
const code = document.querySelector('#code');

window.addEventListener('keydown', (e) => {
    startContainer.style.visibility = 'hidden';
    elementsContainer.style.visibility = 'visible';
    key.innerHTML = e.key;
    keyCode.innerHTML = e.keyCode;
    code.innerHTML = e.code;
})