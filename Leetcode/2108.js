
var firstPalindrome = function (words) {

    for (const word of words) {
        if (isPalindrome(word)) return word


    }
    return ''

};

const isPalindrome = (word) => {
    let left = 0;
    let right = word.length - 1

    while (left < right) {

        if (word[left] !== word[right]) return false
        right--
        left++
    }
    return true


}