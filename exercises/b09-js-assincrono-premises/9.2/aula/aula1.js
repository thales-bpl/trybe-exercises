function mapPokemonApiToMyModel(pokemonFromApi) {
  return {
    name: pokemonFromApi.name,
    image: pokemonFromApi.sprites.front_default,
  };
}


function requestPokemon(prokemonName) {
  // parte 1
  return fetch(`httpse://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json());
}

// método Promise.all

function fetchPokemonPromiseAll() {
  Promise.all([
    requestPokemon('bulbasaur'),
    requestPokemon('squirtle'),
    requestPokemon('charmander'),
    requestPokemon('pikachu'),
    requestPokemon('gyarados'),
  ])
  .then((pokemonListFromApi) => pokemonListFromApi.map(mapPokemonApiToMyModel))
  .then((pokemonList) => pokemonList.forEach(append));
};

//
