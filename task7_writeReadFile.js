const fs = require('fs')

// const arr = [
//     { id: '1', name: 'iPhone X', price: 1000},
//     { id: '2', name: 'iPhone 13', price: 1300},
//     { id: '3', name: 'Xiaomi Redmi Note 7', price: 600},
//     { id: '4', name: 'Google Pixel 4', price: 900},
//     { id: '5', name: 'Samsung Galaxy S10', price: 1100},
//     { id: '6', name: 'Nokia 3301', price: 100},
// ]
//
// fs.writeFile('task7.json', JSON.stringify(arr), err => {   тут я записал массив(обьект) в json формате
//     if(err) console.log('error')
// })
const data = fs.readFileSync('task7.json')
console.log(data)
const parsed = JSON.parse(data)   // декодирует файл для работы
console.log(parsed)
function filterByPriceIds(smartphones, price){
    let ids = []


    for(let smartphone of smartphones){         // for(let i in smartphones){
        let id = smartphone.id                  //    let id = smartphones[i].id
        if(smartphone.price > price){           //    if(smartphones[i].price > price)
            ids.push(id)
        }
    }
    return ids
}

console.log(filterByPriceIds(parsed, 700))