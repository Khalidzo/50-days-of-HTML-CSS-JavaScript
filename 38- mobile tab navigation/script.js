const content = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('nav ul li');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const index = Array.prototype.indexOf.call(buttons, button);

        resetButtons();
        resetImage();

        button.classList.add('active');
        content[index].classList.add('active');
    });
});

function resetButtons() {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

function resetImage() {
    content.forEach(image => {
        image.classList.remove('active');
    })
}