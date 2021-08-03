const assert = require('assert');

const onlineGames = ['Dota', 'Lol', 'CS:GO', 'Tibia'];
const offlineGames = ['Simcity', 'GTA', 'Mario', 'Stardew Valley'];

const awesomeGames = [...onlineGames, ...offlineGames]
console.log(awesomeGames);

assert.deepStrictEqual(awesomeGames, ['Dota', 'Lol', 'CS:GO', 'Tibia', 'Simcity', 'GTA', 'Mario', 'Stardew Valley'])
