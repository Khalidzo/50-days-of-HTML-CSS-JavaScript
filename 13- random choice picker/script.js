const tags = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

textarea.addEventListener('input', createTags);

textarea.addEventListener('keydown', emptyAndChoose);

function emptyAndChoose(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        textarea.value = '';
        randomSelect();
    }
}

function createTags() {
    const inputTags = textarea.value.split(',');
    let htmlInput = '';

    inputTags.forEach(tag => {
        if (tag != '') {
            htmlInput += `<span class="tag">${tag}</span>`;
        }
    });

    tags.innerHTML = htmlInput;
}

function randomSelect() {
    const repetitions = 30;
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);

    }, 100);
    
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);

    }, repetitions * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}