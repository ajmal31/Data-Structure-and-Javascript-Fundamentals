var busyStudent = function(arr1, arr2, queryTime) {
    
    let n=arr1.length
    let count=0
    for(let i=0;i<n;i++)
        {
            if(arr1[i]<=queryTime)
                {
                    if(queryTime<=arr2[i])
                        {
                            count++
                        }
                }
            
           
        }
    
    return count
    
};