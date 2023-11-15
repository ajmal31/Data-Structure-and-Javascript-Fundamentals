
var reversePrefix = function (word, ch) {


    let index = word.indexOf(ch)
    let arr = word.split('')
    let j = index
    for (let i = 0; i < (index + 1) / 2; i++) {

        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j--
    }

    return arr.join('')

};