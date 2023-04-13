const mainImg = document.querySelector('.main-img');
const contentHeader = document.querySelector('.content-header');
const contentBody = document.querySelector('.content-body');
const authorImg = document.querySelector('.author-img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');

setTimeout(loadData, 2500);

function loadData() {
    // header image
    mainImg.classList.remove('animated-bg');
    mainImg.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="main-img"></img>';
    
    // content header
    contentHeader.classList.remove('animated-bg');
    contentHeader.classList.remove('animated-bg-text');
    contentHeader.innerHTML = 'Lorem ipsum dolor sit amet';

    // content body
    contentBody.classList.remove('animated-bg');
    contentBody.classList.remove('animated-bg-text');
    contentBody.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate';

    // author image
    authorImg.classList.remove('animated-bg');
    authorImg.innerHTML = ' <img id="author-img" src="https://randomuser.me/api/portraits/men/32.jpg" alt="usr-img">';

    // author name
    name.classList.remove('animated-bg');
    name.classList.remove('animated-bg-text');
    name.innerHTML = 'John Doe';

    // date
    date.classList.remove('animated-bg');
    date.classList.remove('animated-bg-text');
    date.innerHTML = 'Apr 13, 2023';
}