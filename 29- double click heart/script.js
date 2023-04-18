const count = document.querySelector('.count');
const image = document.querySelector('.image');

let lastTimeStamp;
let loveCount = 0;

image.addEventListener('click', (e) => {
    const pos = getMousePosition(e);
    const deltaTime = e.timeStamp - lastTimeStamp
    lastTimeStamp = e.timeStamp;

    if (deltaTime < 400) {
        loveCount++;
        count.innerHTML = loveCount;
        emptyHearts();
        spawnHeart(pos);
    }
});

function spawnHeart(pos) {
    const heartEl = document.createElement('i');
    
    // set element's classes
    heartEl.setAttribute('class', 'fa-solid fa-heart heart');

    // set element's position
    heartEl.style.left = `${pos.x - 12}px`;
    heartEl.style.top = `${pos.y - 12}px`;
    heartEl.style.color = '#c51104';
    
    console.log(pos, 'hello');
    // add heart element to the parent element
    image.appendChild(heartEl);

    // remove item after animation
    setTimeout(() => {
        heartEl.remove();
    }, 500);
}

function getMousePosition(e) {
    const bounds = image.getBoundingClientRect();

    const pos = {
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top
    }

    return pos;
}

function emptyHearts() {
    image.innerHTML = '';
}