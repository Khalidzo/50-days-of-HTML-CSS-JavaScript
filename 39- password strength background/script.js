const background = document.querySelector('.background');
const password = document.getElementById('password');

password.addEventListener('input', () => {
    if (password.value.length * 2 <= 20) {
        const blurValue = 20 - password.value.length * 2;
        background.style.filter = `blur(${blurValue}px)`;
    }
})