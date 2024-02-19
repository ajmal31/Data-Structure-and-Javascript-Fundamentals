var countSubstrings = function(s) {
    let count=s.length

    for(let i=0;i<s.length;i++)
    {
        for(let j=i+1;j<s.length;j++)
        {
           let isPal=true 
           let start=i
           let end=j
           while(start<end){
               if(s[start]!==s[end]){
                 isPal=false
                 break
               }
               start++
               end--
           }
           if(isPal)count++
        }
    }
    return count
};