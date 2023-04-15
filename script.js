const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aed7611d511f1d53a619b3ee7b7327f3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=aed7611d511f1d53a619b3ee7b7327f3&query=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main')

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;

    results.forEach(movie => {
        createMovie(movie);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search;

    if (search && search != '') {
        main.innerHTML = '';
        getMovies(SEARCH_API + searchTerm.value);
    }
})

function createMovie(movieData) {
    // extract data
    const title = movieData.title;
    const overview = movieData.overview;
    const rating = Math.round(movieData.vote_average * 10) / 10;
    const imgURL = IMG_PATH + movieData.poster_path;

    // rating's color
    const ratingColor = getRatingColor(rating);

    // movie element
    let movie = '';

    // set up the movie html
    movie = `<div class="movie"> 
                <img src="${imgURL}" alt =${title}">
                <div class="movie-info"> 
                    <h3>${title}</h3>
                    <span class="${ratingColor}">${rating}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
            </div>`;
    
    main.insertAdjacentHTML('beforeend', movie);
}

function getRatingColor(rating) {
    if (rating >= 8) {
        rating = 'green'; 
    } 
    else if (rating < 8 && rating > 4) {
        rating = 'orange';
    }
    else {
        rating = 'red';
    }
    return rating;
}