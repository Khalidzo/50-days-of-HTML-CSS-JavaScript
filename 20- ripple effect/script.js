const button = document.querySelector('.ripple');

button.addEventListener('click', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xRelative = x - buttonLeft;
    const yRelative = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yRelative + 'px';
    circle.style.left = xRelative + 'px';

    button.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 500);
})

