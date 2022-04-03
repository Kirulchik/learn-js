function contains(words, letter) {
    let element
    let filteredWords = []

    for( let i in words){
        element = words[i]
        if(element.indexOf(letter) !== -1){ //indexOf - ищет подстроку в строке (необходио указать что надо найти)
            filteredWords.push(element)
        }
    }
    return filteredWords
}

console.log(contains(['apple', 'banana', 'pear', 'grape', 'pomegranate'], 'p'))
console.log(contains(['apple', 'banana', 'pear', 'grape', 'pomegranate'], 'n'))
console.log(contains(['apple', 'banana', 'pear', 'grape', 'pomegranate'], 'k'))
console.log(contains(['apple', 'banana', 'pear', 'grape', 'pomegranate'], 'l'))