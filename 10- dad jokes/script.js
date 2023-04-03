const jokeBtn = document.querySelector('#jokeBtn');
const joke = document.querySelector('#joke');

const config = {
    headers: {
      Accept: 'application/json',
    }
};

function generateJoke() {
    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then(data => joke.innerHTML = data.joke);
}

generateJoke();

jokeBtn.addEventListener('click', generateJoke);