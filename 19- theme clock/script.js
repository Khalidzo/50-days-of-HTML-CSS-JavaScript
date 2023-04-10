const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');

setInterval(updateTime, 1000);

function updateTime() {
    const currentdate = new Date();
    const hours = currentdate.getHours();
    const minutes = currentdate.getMinutes();
    const seconds = currentdate.getSeconds();
    const day = currentdate.toLocaleDateString('en-us', {weekday: 'long'});
    const month = currentdate.toLocaleString('en-US', {month: 'long'});
    const ampm = hours >= 12? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 24, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    timeEl.innerHTML = `${hours % 12}:${minutes} ${ampm}`;
    dateEl.innerHTML = `${day}, ${month} <span class="circle">${currentdate.getDate()}</span>`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    }
    else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
})