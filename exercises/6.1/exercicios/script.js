const boxStates = document.querySelector('#input-state') // elemento <select> que recebe options dos estados

const estados = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espirito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MS: 'Mato Grosso do Sul',
  MT: 'Mato Grosso',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

for (let index in estados) {
  let stateOption = document.createElement('option')
  stateOption.innerText = estados[index];
  stateOption.value = index;
  boxStates.appendChild(stateOption);
}

const jobStart = document.querySelector('#job-initial-date') //input que recebe data de início do emprego
/* for (let index = 0; index < jobStart.innerText.length; index += 1) {

} */