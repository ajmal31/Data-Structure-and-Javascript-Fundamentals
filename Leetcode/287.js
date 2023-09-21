var findDuplicate = function(arr) {
    
    
    let set=new Set()
    for(let i=0;i<arr.length;i++)
        {
            if(set.has(arr[i]))
                {
                    return arr[i]
                }else
                    {
                        set.add(arr[i])
                    }
        }
      
  };