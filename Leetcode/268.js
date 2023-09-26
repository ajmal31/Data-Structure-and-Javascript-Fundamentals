var missingNumber = function(arr) {
    
    let set=new Set()
    
    for(let i=0;i<arr.length;i++)
        {
            set.add(arr[i])
        }
    for(let j=0;j<=arr.length;j++)
        {
            if(!set.has(j))
                {
                    return j
                }
        }
    
};