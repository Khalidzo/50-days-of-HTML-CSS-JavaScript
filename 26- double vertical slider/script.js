const sliderContainer = document.querySelector('.slider-container');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const slidesLength = rightSlider.querySelectorAll('div').length;
const sliderHeight = sliderContainer.clientHeight;

let currentIndex = 0;

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex > slidesLength - 1) {
        currentIndex = 0;
    }
    rightSlider.style.transform = `translateY(-${currentIndex * sliderHeight}px)`;
    leftSlider.style.transform = `translateY(${currentIndex * sliderHeight}px)`;
})

downBtn.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = slidesLength - 1;
    }
    rightSlider.style.transform = `translateY(-${currentIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${currentIndex * sliderHeight}px)`
})
