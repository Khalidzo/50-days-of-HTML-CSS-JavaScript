const feedbacks = document.querySelectorAll('.review');
const feedbackContainer = document.getElementById('feedback-form');
const thanksContainer = document.getElementById('thanks-container');
const btn = document.querySelector('.btn');

let review;

feedbacks.forEach(feedback => {
    feedback.addEventListener('click', () => {
        reset();
        feedback.classList.add('active');
        review = feedback.id;
    });
});

btn.addEventListener('click', () => {
    feedbackContainer.classList.remove('active');

    const thanksMsg = document.createElement('div');
    thanksMsg.setAttribute('class', 'container thanks-container active');
    thanksMsg.innerHTML = ` <p>❤️</p>
                            <h4>Thank You!</h4>
                            <h4 class="feedback">Feedback: <span>${review}</span></h4>
                            <p>We'll use your feedback to improve our <br>customer support</p>`;

    
    document.body.appendChild(thanksMsg);
});


function reset() {
    feedbacks.forEach(feedback => {
        feedback.classList.remove('active');
    });
}