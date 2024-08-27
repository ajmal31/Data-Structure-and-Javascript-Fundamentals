
function countVowelsAndConsonants(str){

    const vowels=["a","e","i","o","u"]
    let vowelscount=0
    let consonants=0
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toString()))vowelscount++
        else consonants++
    }
    return {vowelscount,consonants}
}
console.log(countVowelsAndConsonants("javascript"))
