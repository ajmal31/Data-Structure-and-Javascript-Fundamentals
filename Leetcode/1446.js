
var maxPower = function(s) {
    let max=1,count=1,prev=s[0]
    
    
    for(let i=1;i<s.length;i++)
        {
           if(prev===s[i])
               {
                   count++
                   max=Math.max(count,max)
               }else{
                  count=1
               }
               prev=s[i]    
                   
        }
    return max
     
   
    
};