
var isPowerOfThree = function(n) {

    if(n==1) return true
    let power=3
    for(let i=2;i<n;i++)
    {
        
        
        if(power===n) return true
        else if(power>n) return false
        power=power*3
    }
    return false
    
}; 