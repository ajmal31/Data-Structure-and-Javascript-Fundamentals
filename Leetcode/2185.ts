//approach 1
var prefixCount = function (words, pref) {
    let count = 0;
    let prefLen = pref.length
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= prefLen) {
            if (words[i].slice(0, prefLen) === pref) count++
        }
    }

    return count
}
//approach 2
var prefixCount = function (words,pref){
    let count = 0;
    for (let i = 0; i < words.length; i++) {
       words[i].startsWith(pref)&&count++
    }
    return count

};