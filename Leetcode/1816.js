
var truncateSentence = function(s, k) {

    let str=s.split(' ')

    if(str.length===k) return str.join(' ')
    else return str.slice(0,k).join(' ')
    

    
};