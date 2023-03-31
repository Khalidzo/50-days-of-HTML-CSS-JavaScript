const showBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const container = document.querySelector('.container');

showBtn.addEventListener('click', () => {
    container.classList.add('rotated');
});

closeBtn.addEventListener('click', () => {
    container.classList.remove('rotated');
});

