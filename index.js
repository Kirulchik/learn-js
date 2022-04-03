const fs = require('fs')
const csv = require('csv-parser')
const fullPlayersFile = 'players.csv'
const shortPlayersFile = 'short_players.csv'
const heroNamesFile = 'hero_names.csv'


// const data = fs.readFileSync('players.csv', err => {
//     if(err) console.log('error')
// })

let readFromFile = async (fileName, separator) => {
    let result = []
    return new Promise(function (resolve, reject) {
        fs.createReadStream(fileName)
            .pipe(csv({ separator:separator}))
            .on('data', (data) => result.push(data))
            .on('end', () => {
                resolve(result)
            })
            .on('error', reject);
    });
}
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
        if(!heroTimes.hasOwnProperty(row.hero_id)) {
            heroTimes[row.hero_id] = 0
        }
        heroTimes[row.hero_id]++
    }
    // {
    //     "81": 23,
    //     "43": 45
    // }
    let heroIdMax = ''
    for(let heroId in heroTimes) {
        if(heroIdMax === '') {
            heroIdMax = heroId
        }
        if(heroTimes[heroId] > heroTimes[heroIdMax]) {
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
function findHero(heroNames, heroId){
    for(let heroName of heroNames){
        if(heroName.hero_id === heroId){
            return heroName.localized_name
        }
    }
}

// следузая задача - выбрасываем всех не нужных героев, потом сортируем по коофициенту убийства/смерти и берем первые 10 айди героев