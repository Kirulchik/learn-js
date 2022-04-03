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

console.log(filterByPriceIds([
    { id: '1', name: 'iPhone X', price: 1000},
    { id: '2', name: 'iPhone 13', price: 1300},
    { id: '3', name: 'Xiaomi Redmi Note 7', price: 600},
    { id: '4', name: 'Google Pixel 4', price: 900},
    { id: '5', name: 'Samsung Galaxy S10', price: 1100},
    { id: '6', name: 'Nokia 3301', price: 100},
], 700))