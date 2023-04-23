const btns = document.querySelectorAll('.switch-button');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        console.log(btn.id);
        setDesire(btn.id);
    })
})

function setDesire(desire) {
    switch (desire) {
        case 'good':
            if (isActive(cheap) && isActive(fast)) {
                fast.classList.remove('active');
            }
            break;
        case 'cheap':
            if (isActive(good) && isActive(fast)) {
                good.classList.remove('active');
            }
            break;
        case 'fast':
            if (isActive(good) && isActive(cheap)) {
                cheap.classList.remove('active');
            }
            break;
        default:
            break;
    }
}

function isActive(btn) {
    return btn.classList.contains('active');
}