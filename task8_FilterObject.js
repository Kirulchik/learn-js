function filterByPriceIds(smartphones, filter){
    let ids = []


    for(let smartphone of smartphones){
        let id = smartphone.id
        // price
        if(typeof filter.price !== 'undefined') { // проверяем есть ли поле прайс в объекте фильтр
            // далее проверяем попадает ли в диапазон фильтра цена текущего смартофона
            if(typeof filter.price.min !== 'undefined' && smartphone.price < filter.price.min){
                continue
            }
            if(typeof filter.price.max !== 'undefined' && smartphone.price > filter.price.max){
                continue
            }
        }
        // amount
        if(typeof filter.amount !== 'undefined') {
            if(typeof filter.amount.min !== 'undefined' && smartphone.amount < filter.amount.min) {
                continue
            }
            if(typeof filter.amount.max !== 'undefined' && smartphone.amount > filter.amount.max) {
                continue
            }
        }
        //vendore_codes
        // АА0766
        if(typeof filter.vendor_codes !== 'undefined') {
            let foundVendorCode = false
            // проверяем входил ли артикул в список артикулей в фильтре
            for (let code of filter.vendor_codes) {
                if (code === smartphone.vendor_code) {
                    foundVendorCode = true
                    break
                }
            }
            if (foundVendorCode != true) {
                continue
            }
        }
        // manufactured_counties
        if(typeof filter.manufactured_counties !== 'undefined') {
            let foundManufacturedCounties = false
            for (let country of filter.manufactured_counties) {
                if (country === smartphone.manufactured_country) {
                    foundManufacturedCounties = true
                    break
                }
            }
            // проверяем что нашли страну
            if (foundManufacturedCounties != true) {
                continue
            }
        }
        // date
        if(typeof filter.created_at !== 'undefined') {
            let createdAt = Date.parse(smartphone.created_at) // из строки делаем объект времени
            if (typeof filter.created_at.from !== 'undefined' && createdAt < Date.parse(filter.created_at.from)){
                continue
            }
            if(typeof filter.created_at.to !== 'undefined' && createdAt > Date.parse(filter.created_at.to)){
                continue
            }
        }
        ids.push(id) //добавляем в результирующий массив ид смартфона подходящего под все фильры
    }
    return ids
}

let currentFilters = {
    price: { min: 0, max: 1000 },
    amount: { min: 4 },
    vendor_codes: ['АА0766', 'АI6666', 'AB1488'],
    manufactured_counties: ['USA', 'China', 'Ukraine'],
    created_at: { from: '2020-01-01', to: '2022-02-04' }
}
let currentFilters1 = {
    price: { max: 2000 },
    amount: { max: 2000 },
    created_at: {from: '1997-07-15'}
}

console.log(filterByPriceIds([
    { id: '1', name: 'iPhone X', price: 1000, created_at: '2020-01-04', amount: 43, vendor_code: 'АА0766', manufactured_country: 'Ukraine'},
    { id: '2', name: 'iPhone 13', price: 900, created_at: '2021-07-16', amount: 9, vendor_code: 'АI6666', manufactured_country: 'Ukraine'},
    { id: '3', name: 'Xiaomi Redmi Note 7', price: 600, created_at: '2020-06-20', amount: 0, vendor_code: 'AA0888', manufactured_country: 'China'},
    { id: '4', name: 'Google Pixel 4', price: 900, created_at: '2019-02-10', amount: 21, vendor_code: 'BC0110', manufactured_country: 'USA'},
    { id: '5', name: 'Samsung Galaxy S10', price: 1100, created_at: '2020-11-04', amount: 180, vendor_code: 'AI0766', manufactured_country: 'UK' },
    { id: '6', name: 'Nokia 3301', price: 100, created_at: '1997-07-16', amount: 24, vendor_code: 'AA0228', manufactured_country: 'SSSR'},
], currentFilters1))
