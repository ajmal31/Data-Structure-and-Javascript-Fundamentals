var findTheLongestBalancedSubstring = function(s) {

    let substr=""
    let result=0
    for(let i=0;i<s.length/2;i++)
    {
         substr='0'+substr+'1'
         if(s.includes(substr)){
             result=substr.length
         }else
         {
             return result
         }
         
    }
    return result
    
};