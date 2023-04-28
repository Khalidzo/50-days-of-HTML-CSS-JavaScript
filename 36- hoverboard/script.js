const boxContainer = document.querySelector('.container');

const boxes = document.querySelectorAll('.box');

const colors = ['orangered', 'purple', 'limegreen', 'darkturquoise	'];
const defaultColor = 'rgb(29, 29, 29)';

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
        box.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
    });
});

boxes.forEach(box => {
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = defaultColor;
        box.style.boxShadow = `0 0 2px ${defaultColor}, 0 0 10px ${defaultColor}`;
    });
});

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}