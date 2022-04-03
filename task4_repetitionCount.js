function repetitionCount(arr, n){
    let count = 0
    for(let i in arr){
        let element = arr[i]
        if(element === n){
            count++
        }
    }
    return count
}

let n = 2
console.log(repetitionCount([34, 2, 6, 2, 32, 78, 2, 456, 6, 9, 1], n) + ' повторения числа ' + n )