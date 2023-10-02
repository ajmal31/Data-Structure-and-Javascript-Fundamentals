var plusOne = function(arr) {
  
    let str=arr.join('')
    let final=[]
   
    let num=BigInt(str)
     num=num+BigInt(1)
    

    num=num.toString()
    
    for(let j=0;j<num.length;j++)
        {
            final.push(Number(num[j]))
        }
    return final
    
};
