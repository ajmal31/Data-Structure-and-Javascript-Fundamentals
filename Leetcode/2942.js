
var findWordsContaining = function(words, x) {
 
    let result=[]
    for(let i=0;i<words.length;i++)
    {
        let a=words[i].includes(x)
       if(a) result.push(i)
    }
    return result
    
};