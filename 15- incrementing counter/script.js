const numbers = document.querySelectorAll('.number');

/* const increment = setInterval(countUp, 1/100); */

numbers.forEach(number => {
    number.innerHTML = '0';

    const countUp = () => {
        const target = Number(number.getAttribute('data-target'));
        const step = target / 200;
        const counter = Number(number.innerHTML);

        if (counter < target) {
            number.innerHTML = `${Math.ceil(counter + step)}`;

            setTimeout(countUp, 1);
        }
    }
    countUp();
})
