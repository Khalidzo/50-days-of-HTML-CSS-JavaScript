const sliders = document.querySelectorAll('.slide');
const body = document.querySelector('body');
const right = document.getElementById('right');
const left = document.getElementById('left');

let currentIndex = 0;

right.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= sliders.length) {
        currentIndex = 0;
    }
    updateImage();
})

left.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliders.length - 1;
    }
    updateImage();
})

function updateImage() {
    removeActive(sliders);
    sliders[currentIndex].classList.add('active');
    body.style.backgroundImage = sliders[currentIndex].style.backgroundImage;
}

function removeActive(sliders) {
    sliders.forEach(slider => {
        slider.classList.remove('active');
    })
}