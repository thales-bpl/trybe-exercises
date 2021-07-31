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
];

const statesBR = [
  {short: 'AC', name: 'Acre'},
  {short: 'AL', name: 'Alagoas'},
  {short: 'AP', name: 'Amapá'},
  {short: 'AM', name: 'Amazonas'},
  {short: 'BA', name: 'Bahia'},
  {short: 'CE', name: 'Ceará'},
  {short: 'DF', name: 'Distrito Federal'},
  {short: 'ES', name: 'Espirito Santo'},
  {short: 'GO', name: 'Goiás'},
  {short: 'MA', name: 'Maranhão'},
  {short: 'MS', name: 'Mato Grosso do Sul'},
  {short: 'MT', name: 'Mato Grosso'},
  {short: 'MG', name: 'Minas Gerais'},
  {short: 'PA', name: 'Pará'},
  {short: 'PB', name: 'Paraíba'},
  {short: 'PR', name: 'Paraná'},
  {short: 'PE', name: 'Pernambuco'},
  {short: 'PI', name: 'Piauí'},
  {short: 'RJ', name: 'Rio de Janeiro'},
  {short: 'RN', name: 'Rio Grande do Norte'},
  {short: 'RS', name: 'Rio Grande do Sul'},
  {short: 'RO', name: 'Rondônia'},
  {short: 'RR', name: 'Roraima'},
  {short: 'SC', name: 'Santa Catarina'},
  {short: 'SP', name: 'São Paulo'},
  {short: 'SE', name: 'Sergipe'},
  {short: 'TO', name: 'Tocantins'},
];

const cidadeEEstado = cities.map((city) => {
  const state = statesBR.find((objState) => objState.short === city.state)
  return `A cidade de ${city.name} fica no estado: ${state.name}`
})

console.log(cidadeEEstado);
