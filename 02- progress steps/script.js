const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;
let currentWidth = 0;
const step = Math.floor(100 / (circles.length - 1));

next.addEventListener('click', () => {
    if (currentStep < 4) {
        currentStep++;
        currentWidth += step;
        progress.style.width = (currentWidth.toString() + '%');
        circles[currentStep - 1].classList.add('active');
    }
    updateButtons();
});

prev.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        currentWidth -= step;
        progress.style.width = (currentWidth.toString() + '%');
        circles[currentStep].classList.remove('active');
        prev.disabled = false;
    }
    updateButtons();
});

function updateButtons() {
    if(currentStep === 1) {
        prev.disabled = true
    } else if(currentStep === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}