//Write a function to replace each alphabet in the given string with another alphabet 
//occurring at the n-th position from each of them.

function checker(val) {
    let matchLetter = "a"
    return val.toUpperCase() === matchLetter.toUpperCase() ? "z" : val

}

function replaceAlpha(str) {

    //Replace alphabet with another letter
    //where ever you found "a" replace with "z"


    let arr = str.split('')
    let result = arr.map(checker).join('')
    return result

}

console.log(replaceAlpha("Hello ajmal ! I would like to walk with you"))
