const questions = document.querySelectorAll('.question');
const forms = document.querySelectorAll('form');
const repeat = document.querySelector('.repeat');
const result = document.querySelector('.result');
const reloadBtn = document.getElementById('reload');

let score = 0;
let index = 0;
const answers = ['JavaScript', 'Cascading Style Sheets', 'Hypertext Markup Language'];


questions.forEach(question => {
    const button = getButton(question);

    button.addEventListener('click', (e) => {
        reset();
        const answer = forms[index].querySelector('input[name="answer"]:checked').value;

        if (answer == answers[index]) {
            score++;
        }

        if (index < questions.length - 1) {
            index++;
            questions[index].classList.add('active');
            resetSelection();
        }

        else if(index >= questions.length - 1) {
            index = 0;
            reset();
            repeat.classList.add('active');
            result.innerHTML = `You've got ${score}/${questions.length} correct`;

            score = 0;
        }
    });
});

reloadBtn.addEventListener('click', () => {
    repeat.classList.remove('active');
    questions[index].classList.add('active');
    resetSelection();
});

function resetSelection() {
    forms.forEach(form => {
        const radio = form.querySelector('input[name="answer"]:checked');

        if (radio) {
            radio.checked = false;
        }
    });
}

function getButton(question) {
    return question.children[1].children[1]
}

function reset() {
    questions.forEach(question => {
        question.classList.remove('active');
    });
}