/ function arrExample(arr) {
//     let a = []
//     for (let el of arr) {
//         a.push(el+1)
//     }
//     return a
// }

// function arrExample2(arr) {
//     let len = arr.length // 6
//     for (let i = 0; i < len; i++) {
//         console.log(arr.pop())
//         // console.log(arr.shift())
//     }
//     console.log(arr)
// }
// // console.log(arrExample([34, 55, 2, 787, 364, 45, 5, 6], 3))
// console.log(arrExample2([34, 55, 2, 787, 364, 45, 5, 6], 3))


function sumMinElement(array, n){
    let sumMin = 0
    let element
    array = array.sort((a,b) => a-b ) // метод который сортирует масссив по возрастанию (внутри стрелочная функция и ей важно знать разница положительная или отрицательная для сортировки)

    for (let i in array) {
        element = array[i]
        if (i < n) {
            sumMin += element
            continue
        }
        break
    }

    return sumMin
}
console.log(sumMinElement([3, 55, 2, 787, 364, 45, 5, 6], 5))
//a = [1,2,3,4,5]
// [ 4, 6, 3, 2, 3 ]  N=3
// 4 -- [4]
// 6 -- [4, 6]
// 3 -- arr.splice(0, 0, element)
// 3 -- [3, 4, 6]
// 2 -- arr.splice(0, 0, element)
// arr.pop()
// 2 -- [2, 3, 4]
// 3 -- arr.splice(2, 0, element)
// arr.pop()
// [2, 3, 3]

// let array = [32, 45, 31, 3, 543, 74]
// console.log(array.sort())
