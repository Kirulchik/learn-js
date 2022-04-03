//2 Функция которая находит в массиве минимальный элемент
function minInArray(arr) {
    if (arr.length == 0) { //проверка на наличие элементов массива
        return 0
    }

    let min = arr[0]
    for( let i = 0; i < arr.length; ++i){ // перебираем каждый элемент массива
        if(arr[i] < min){ // сравниваем элемент массива с текущим
            min = arr[i] // и если он меньше то записываем его в min
        }
    }

    return min

}
// [0:101, 1:256, ...]
console.log(minInArray([101, 256, 544, 10, 6, 53]))
console.log(minInArray([233, 54, 1, 44, 787, 343, 89, 4]))