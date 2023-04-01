const searchBtn = document.querySelector('.btn');
const container = document.querySelector('.container');

searchBtn.addEventListener('click', () => {
    container.classList.toggle('active')
});