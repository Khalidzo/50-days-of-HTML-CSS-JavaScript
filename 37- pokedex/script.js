const container = document.getElementById('container');
const API = `https://pokeapi.co/api/v2/pokemon/`;
let IMG_API = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/`;

const colors = {
    lightgreen: 'rgb(222, 253, 224)',
    lightblue: 'rgb(222, 243, 253)',
    red: 'rgb(248, 213, 163)',
    green: 'rgb(152, 215, 165)'
}
const colorCategories = {   redCategory: ['fighting', 'fire', 'dark', 'dragon'], 
                            earthCategory: ['rock', 'ground', 'psychic', 'bug'],
                            lightCategory: ['normal', 'ice', 'fairy', 'steel'],
                            blueCategory: ['dark', 'flying', 'water', 'electric', 'fairy']};


createPokemons();

async function createPokemons() {
    for (let i = 1; i <= 150; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        createPokemon(i.toString());
    }
}

async function createPokemon(id) {
    const pokemon = await getPokemon(id);

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = pokemon.color;

    card.innerHTML = `<div class="img-container">
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                    </div>
                    <div class="card-id">#${pokemon.id}</div>
                    <h3 class="name">${pokemon.name}</h3>
                    <p class="type">Type: ${pokemon.type}</p>`;

    container.appendChild(card);
}

async function getPokemon(id) {
    const response = await fetch(API + id);
    const data = await response.json();
    const img_response = await fetch(IMG_API + id + '.svg');
    const image = img_response.url;

    const pokemon = {
        id: data.id,
        name: data.species.name,
        image: image,
        type: data.types[0].type.name,
        color: getColor(data.types[0].type.name),
    };

    return pokemon;
}

function getColor(type) {
    type = type.toLowerCase();

    if (colorCategories.redCategory.includes(type)) {
        return colors.red;
    }

    else if (colorCategories.earthCategory.includes(type)) {
        return colors.green;
    }

    else if (colorCategories.lightCategory.includes(type)) {
        return colors.lightgreen;
    }

    else if (colorCategories.blueCategory.includes(type)) {
        return colors.lightblue;
    }

    else {
        return colors.lightgreen;
    }
}