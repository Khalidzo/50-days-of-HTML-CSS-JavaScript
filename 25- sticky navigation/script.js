const nav = document.querySelector('.nav');

document.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});