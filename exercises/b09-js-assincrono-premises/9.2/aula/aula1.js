// Obs: pokemonFromApi() retorna um pokemon apenas

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
}

// Se uma das promises dp Promise.all() falhar, todas elas falharão também.
// Para isso vamos usar .catch()

function fetchPokemonPromiseAll() {
  Promise.all([
    requestPokemon('bulbasaur'),
    requestPokemon('squirtle'),
    requestPokemon('charmander'),
    requestPokemon('pikachu'),
    requestPokemon('gyarados'),
  ])
  .then((pokemonListFromApi) => pokemonListFromApi.map(mapPokemonApiToMyModel))
  .then((pokemonList) => pokemonList.forEach(append))
  .catch((error) => console.log(error));
}

// ao tentar requestPokemon('charmanderrrrrr'), teremos um error. Usamos catch pra capturar esse erro

// Abordagem de encadeamento de fetch / requests

function mapAndShow(pokemonFromApi) {
  const pokemon = mapPokemonApiToMyModel(pokemonFromApi);
  append(pokemon);
}

function fetchPokemonChain() {
  requestPokemon('ditto')
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('bulbasaur'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('squirtle'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('charmander'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('pikachu'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
    .then(() => requestPokemon('gyarados'))
    .then((pokemonFromApi) => mapAndShow(pokemonFromApi))
    .catch((error) => console.error(error))
}

// abordagem async/await

// const arrowFunction = async () => {
//  }

async function fetchPokemonAsyncAwait() {
  try {

    const promise = await Promise.all([
      requestPokemon('bulbasaur'),
      requestPokemon('squirtle'),
      requestPokemon('charmander'),
      requestPokemon('pikachu'),
      requestPokemon('gyarados'),
    ]);
    
    pokemonListFromApi.map(mapPokemonApiToMyModel)
    .forEach(append);
  } catch (error) {
    console.error(error);
  }
}

// Se dermos console.log(promise), vemos no html que promise tem valor 'Promise'. Ao colocar o await na L82, promise recebe o valor do array dos elementos. Ao contrário do encadeamento, o valor array com os dados dos pokemon fica armazenado na const promise.

// abordagem async await substituindo o encadeamento

async function fetchPokemonChainAsyncAwait() {
  try {
    const pokemonFromApi = await requestPokemon('ditto')
      mapAndShow(pokemonFromApi)
  } catch (error) {
   console.error(error);
  }

  try {
    mapAndShow(requestPokemon('bulbasaur'))
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(requestPokemon('squirtle'))
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(requestPokemon('charmander'))
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(requestPokemon('pikachu'))
  } catch (error) {
    console.error(error);
  }

  try {
    mapAndShow(requestPokemon('gyarados'))
  } catch (error) {
    console.error(error);
  }
}

