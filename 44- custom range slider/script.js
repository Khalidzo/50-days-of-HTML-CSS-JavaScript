const slider = document.querySelector('.slider');
const indicator = document.getElementById('indicator');
const indicatorWidth = parseInt(window.getComputedStyle(indicator).getPropertyValue('width'));


slider.addEventListener('input', (e) => {
    const percent = e.target.value;
    indicator.style.left = `${(percent /100 * slider.offsetWidth)}px`;
    indicator.innerText = percent; // Update the indicator text to display the slider value
});