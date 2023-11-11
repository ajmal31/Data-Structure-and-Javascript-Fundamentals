
var areOccurrencesEqual = function(s) {

    let map=new Map()
    for(let i=0;i<s.length;i++)
    {
       if(map.has(s[i]))
       {
           map.set(s[i],map.get(s[i])+1)
       }else{
           map.set(s[i],1)
       }
    }
    let count=0 
    let temp=map.get(s[0])
    for(const key of map)
    {
       
      if(temp!==key[1]) return false
    
    }
    return true
    
};
