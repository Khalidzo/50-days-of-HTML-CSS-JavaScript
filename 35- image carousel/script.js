const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const images = document.querySelectorAll('.image-container div');

const imagesLength = images.length;
const imgContainer = document.querySelector('.image-container');

imgContainer.style.width = `${(imagesLength + 1) * 100}%`;

let index = 0;

setInterval(swap, 3000);

nextBtn.addEventListener('click', () => {
    swap('right');
});

prevBtn.addEventListener('click', () => {
    swap('left');
});

function swap(direction = 'right') {
    switch (direction) {
        case 'right':
            if (index >= imagesLength - 1) {
                index = 0;
                imgContainer.style.transform = `translateX(0px)`;
            }
            else {
                imgContainer.style.transform = `translateX(${-500 * (index + 1)}px)`;
                index++;
            }
            break;

        case 'left':
            index--;
            if (index < 0) {
                index = 3;
            }
            imgContainer.style.transform = `translateX(${-500 * index}px)`;
            break;

        default:
            break;
    }
}

