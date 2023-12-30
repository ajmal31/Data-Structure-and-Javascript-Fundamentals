var alternateDigitSum = function(n) {

    n=n.toString().split('')
    let sum=0
    for(let i=0;i<n.length;i++)
    {
        if(i%2==0)
        {
         sum+=Number(n[i])
        }else{
            sum+=Number(-(n[i]))

        } 
    }
    return sum
};