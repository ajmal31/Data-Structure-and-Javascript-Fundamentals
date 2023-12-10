var percentageLetter = function(s, letter) {

    if(!s.includes(letter))return 0

    let count=0
    for(let i=0;i<s.length;i++){

      if(s[i]===letter)count++

    }
    return Math.floor((count/s.length)*100)    
    
    
};