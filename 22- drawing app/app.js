const colorEl = document.getElementById('selected-color');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const del = document.querySelector('.delete');
const increase = document.querySelector('.increase');
const reduce = document.querySelector('.reduce');
const sizeNumber = document.querySelector('.size');

let isPressed = false;
let pos = { x: 0, y: 0 };
let lineWidth = 5;
let color = 'black';

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    
    pos.x = e.offsetX;
    pos.y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    
    pos.x = undefined;
    pos.y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const currentX = e.offsetX;
        const currentY = e.offsetY;

        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        pos.x = currentX;
        pos.y = currentY;
    }; 

});

del.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener('input', (e) => {
    color = e.target.value;
});

increase.addEventListener('click', ()=> {
    if (lineWidth < 50) {
        lineWidth += 5;
    }
    sizeNumber.innerHTML = lineWidth;
});

reduce.addEventListener('click', ()=> {
    if (lineWidth > 5) {
        lineWidth -= 5;
    }
    sizeNumber.innerHTML = lineWidth;
});