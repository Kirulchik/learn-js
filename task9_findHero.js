const fs = require('fs')
const csv = require('csv-parser')
const readFromFile = require('./read_from_file') // импортирование функции
const fullPlayersFile = 'data/players.csv' // полный сsv
const shortPlayersFile = 'data/short_players.csv' // короткий csv для проверки
const heroNamesFile = 'data/hero_names.csv';


(async function() {
    const players = await readFromFile(fullPlayersFile, ";")
    const heroNames = await readFromFile(heroNamesFile, ",")

    let heroId = mostPick(players)
    let hero = findHero(heroNames, heroId)
    console.log(hero)

}());

function mostPick(rows){
    let heroTimes = {}

    for(let row of rows){
        // hasOwnProperty - метод который определяет есть ли у объекта данный ключ/свойство
        if(!heroTimes.hasOwnProperty(row.hero_id)) {
            heroTimes[row.hero_id] = 0  // и если ключа нету то мы присваиваем ему 0
        }
        heroTimes[row.hero_id]++ // инкрементируем количество повторений
    }
    // {
    //     "81": 23,
    //     "43": 45
    // }
    // поиск героя с максимальным кол-вом повторений
    let heroIdMax = ''
    for(let heroId in heroTimes) {
        if(heroIdMax === '') { // в данном ифе мы определяем первого героя
            heroIdMax = heroId
        }
        if(heroTimes[heroId] > heroTimes[heroIdMax]) { //поиск максимального героя
            heroIdMax = heroId
        }
    }
    return heroIdMax
}

// [
// {
//     name: 'npc_dota_hero_bristleback',
//     hero_id: '99',
//     localized_name: 'Bristleback'
//   },
//]
// ищем имя героя по его идентификатору
function findHero(heroNames, heroId){
    for(let heroName of heroNames){
        if(heroName.hero_id === heroId){
            return heroName.localized_name
        }
    }
}
