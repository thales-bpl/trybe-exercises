const cities = [
  {state: 'AM', name: 'Manaus', region:'N'},
  {state: 'PA', name: 'Belém', region:'N'},
  {state: 'TO', name: 'Porto Nacional', region:'N'},
  {state: 'BA', name: 'Feira de Santana', region:'NE'},
  {state: 'PR', name: 'Cascavel', region:'S'},
  {state: 'SP', name: 'Borebi', region:'SE'},
  {state: 'RN', name: 'Touros', region:'N'},
  {state: 'CE', name: 'Itapipoca', region:'NE'},
  {state: 'RJ', name: 'Rio de Janeiro', region:'SE'},
  {state: 'SP', name: 'São José dos Campos', region:'SE'},
  {state: 'MG', name: 'Lavras', region:'SE'},
  {state: 'TO', name: 'Campos Lindos', region:'N'}
]

console.log('As cidades do estado de Tocantins são:')

const citiesFromTocantins = cities.filter((city) => city.state === 'TO');
console.table(citiesFromTocantins);

const citiesStartsWithC = cities.filter((city) => city.name.startsWith('C'));
console.table(citiesStartsWithC);

const citiesNordeste = cities.filter((city) => city.region === 'NE')
console.table(citiesNordeste);