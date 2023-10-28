var areAlmostEqual = function(s1, s2) {

    let map=new Map()
    for(let i=0;i<s1.length;i++)
    {
        if(map.has(s1[i]))
        {
            map.set(s1[i],map.get(s1[i])+1)
        }else map.set(s1[i],1)
    }

    for(let i=0;i<s2.length;i++)
    {
        if(map.has(s2[i]))
        {
            let count=map.get(s2[i])
            if(count===1)map.delete(s2[i])
            else map.set(s2[i],map.get(s2[i])-1)
        }else{
            return false
        }
    }
   
    
    let count=0
    for(let i=0;i<s1.length;i++)
    {
            
            if(s1[i]!==s2[i])count++
            if(count>2) return false
    }
   
    
    return true

   
    
};