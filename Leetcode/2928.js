var distributeCandies = function(n, limit) {

    let count=0
    for(let i=0;i<=limit;i++)
    {
        for(let j=0;j<=limit;j++)
        {    
            let temp=n-j-i
            if(temp<=limit&&temp>=0)count++
        }
    }
    return count
    
 };