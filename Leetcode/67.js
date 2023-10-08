var addBinary = function(a, b) {
    
    let sum=a+b
   
    a=BigInt(`0b${a}`)
    b=BigInt(`0b${b}`)
    sum=a+b
   
    result=sum.toString(2)
    return result
    
};