const toasts = document.querySelector('.toasts');
const btn = document.querySelector('.btn');

const numbers = ['one', 'two', 'three'];
const types = ['info', 'success', 'error'];

btn.addEventListener('click', () => {
    const notification = createRandomMsg();

    toasts.appendChild(notification);
    removeChildren(toasts);
});

function createRandomMsg() {
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    
    const notification = document.createElement('div');
    notification.classList.add(randomType);
    notification.classList.add('notification');
    notification.innerHTML = 'Message ' + randomNumber;

    return notification;
}

function removeChildren(parent) {
    for (const child of parent.children) {
        setTimeout(() => {
            child.remove();
        }, 2000);
    }
}