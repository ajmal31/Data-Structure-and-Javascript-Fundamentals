var replaceElements = function(arr) {
    if (arr.length===1) {
       arr[0]=-1
        return arr
    
        }    
    let start=1
    let i=1
      
    while(i<arr.length)
        {

            let temp=arr.slice(start,arr.length)
           let max= Math.max(...temp)
                       if(i===arr.length-1)
                {
                    arr[i-1]=max
                    arr[i]=-1
                    return arr
                    
                    }
           arr[i-1]=max
            start ++
            i++
               
            }
                
};