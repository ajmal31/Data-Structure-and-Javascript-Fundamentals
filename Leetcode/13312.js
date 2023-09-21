//Leetcode Question Number 1332

var removePalindromeSub = function(s) {
    
    let s2=s.split('').reverse().join('')
    if(s===s2)return 1
    else return 2
    
    
};