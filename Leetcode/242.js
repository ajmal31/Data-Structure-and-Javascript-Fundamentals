var isAnagram = function(s, t) {
    
    if(s.length !==t.length)return false
    let map_s=new Map()
    let map_t=new Map()
    for(let i=0;i<s.length;i++)
    {
        map_s.set(s[i],map_s.get(s[i])+1||1)
        map_t.set(t[i],map_t.get(t[i])+1||1)
    }
    for(const key of map_s)
    {
        let k=key[0]
        let count=key[1]
        if(map_t.get(k)!==count)return false
        
    }
    return true

};