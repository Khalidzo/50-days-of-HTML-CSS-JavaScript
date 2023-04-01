const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

let load = 0;
let bgInterval = setInterval(blurring, 25);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(bgInterval);
    }
    
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 100, 0, 0, 1);
    background.style.filter = `blur(${(scale(load, 0, 100, 30, 0))}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}