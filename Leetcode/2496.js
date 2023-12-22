var maximumValue = function(strs) {
   
    let max=Number.NEGATIVE_INFINITY
    for(let i=0;i<strs.length;i++)
    {
        let val=Number(strs[i])
      
        if(isNaN(val)){
            max=Math.max(strs[i].length,max)
        }else{
            max=Math.max(val,max)
        }
       
    }
    console.log(max)
    return max
     
 };
 