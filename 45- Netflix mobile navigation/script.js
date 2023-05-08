const navs = document.querySelectorAll('.nav');
const burgerMenu = document.querySelector('.hamburger-menu');
const exit = document.querySelector('.exit');

burgerMenu.addEventListener('click', activateNav);
exit.addEventListener('click', deactivateNav);

function activateNav() {
    navs.forEach((nav, idx) => {
        setTimeout(() => {
            nav.classList.add('active');
        }, 200 * idx);
    });
}

function deactivateNav() {
    const reversedNavs = [...navs].reverse();

    reversedNavs.forEach((nav, idx) => {
        setTimeout(() => {
            nav.classList.remove('active');
        }, 200 * idx);
    });
}
