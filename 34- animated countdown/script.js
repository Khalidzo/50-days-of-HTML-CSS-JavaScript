const numbers = document.querySelectorAll('span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

playAnimation();

function playAnimation() {
    reset();

    numbers.forEach(function(number, idx) {
        animateNumber(number, idx+1);
    });

    setTimeout(() => {
        counter.classList.add('hide');
        final.classList.add('show');
    }, 1000 * numbers.length * 1.2);
}

function animateNumber(number, index) {
    setTimeout(() => {
        number.classList.add('in');
    }, 1000 * index);

    setTimeout(() => {
        number.classList.remove('in');
        number.classList.add('out');
    }, 1000 * index * 1.2);
}

function reset() {
    numbers.forEach(number => {
        number.classList.remove('in');
        number.classList.remove('out');
    });

    counter.classList.remove('hide');
    final.classList.remove('show');
}

replay.addEventListener('click', playAnimation);