/* exported pokedex */
// function named renderPokemon with parameter pokemon
// code to build dom tree tree: div column > div pokemoncard > img > div card text > text content
// function block should NOT have add or append child elements to page, just building dom
// function should only return outer element (column-third) since that holds all content
// function assigns variables to the appropriate attributes and values
// query DOM for the row element - what you append return from function to
// loop through pokedex array for each object - gets access to each object inside array
// pass object to function and get return value
// append DOM tree returned by function to row element in HTML
var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var $columnThird = document.createElement('div');
  $columnThird.setAttribute('class', 'column-third');

  var $pokemonCard = document.createElement('div');
  $pokemonCard.setAttribute('class', 'pokemon-card');
  $columnThird.appendChild($pokemonCard);

  var $pokemonImg = document.createElement('img');
  $pokemonImg.setAttribute('src', pokemon.imageUrl);
  $pokemonCard.appendChild($pokemonImg);

  var $pokemonCardText = document.createElement('div');
  $pokemonCardText.setAttribute('class', 'pokemon-card-text');
  $pokemonCard.appendChild($pokemonCardText);

  var $pokemonName = document.createElement('h2');
  $pokemonName.textContent = pokemon.name;
  $pokemonCardText.appendChild($pokemonName);

  var $pokemonNumber = document.createElement('h3');
  $pokemonNumber.textContent = '#' + pokemon.number;
  $pokemonCardText.appendChild($pokemonNumber);

  var $pokemonDescription = document.createElement('p');
  $pokemonDescription.textContent = pokemon.description;
  $pokemonCardText.appendChild($pokemonDescription);

  return $columnThird;
}

var $row = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  var $pokemon = renderPokemon(pokedex[i]);
  $row.appendChild($pokemon);
}
