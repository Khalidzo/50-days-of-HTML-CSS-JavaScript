const SEARCH_API = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.querySelector('.search-box');
const user = document.querySelector('.user-container');
const main = document.querySelector('main');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = search.value;
    if (username) {
        getUserInfo(username);
        search.value = '';
        main.innerHTML = '';
    }
    
});

async function getUserInfo(username) {
    // fetch api
    try {
        const response = await fetch(SEARCH_API + username);
        const data = await response.json();
    } catch (err) {
        console.log('wtf');
    }
    finally {
        console.log('wtf');
    }
    // extract needed info
    const name = data.name;
    const bio = data.bio;
    const image = data.avatar_url;
    const followers = data.followers;
    const following = data.following;
    const reposCount = data.public_repos;
    const reposURL = data.repos_url;
    const repos = await getRepos(reposURL);

    // create HTML
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    let reposHTML = '';
    if (repos != '') {
        repos.forEach(repo => {
            reposHTML += `<a class="repo" href="${repo.url}">${repo.name}</a>`;
        });
    }

    let userInfoHTML = `
                    <div class="user-container" id="user">
                        <img src="${image}" alt="user-img">
                        <div class="user-info">
                            <h2>${name}</h2>
                            <p>${bio}</p>
                            <ul>
                                <li>${followers}<strong>Followers</strong></li>
                                <li>${following}<strong>Following</strong></li>
                                <li>${reposCount}<strong>Repos</strong></li>
                            </ul>`
                            +
                            `<div id="repos">
                                ${reposHTML}
                            </div>
                        </div>
                    </div>`;

    // insert HTML to the DOM
    main.innerHTML += userInfoHTML;
}

async function getRepos(reposURL) {
    const repos = [];
    const response = await fetch(reposURL);
    let data = await response.json();

    if (data != '') {
        // sort by the most recent
        const newData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // get the most 5 recent repos
        for (let i=0; i<5; i++) {
            try {
                let repo = {
                    name: data[i].name,
                    url: data[i].html_url
                };
                repos.push(repo);
            }
            catch(e) {

            }
        }
    }

    return repos;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="user-container">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}