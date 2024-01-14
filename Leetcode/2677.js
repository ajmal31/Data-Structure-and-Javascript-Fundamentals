var chunk = function(arr, size) {

    let result=[]
    let count=0
    let temp=[]
    for(let i=0;i<arr.length;i++)
    {     
        temp.push(arr[i])
        count++
         if(count===size)
        {            
           result.push(temp)
           temp=[]
           count=0
        }
    }
    if(temp.length!==0)result.push(temp)
    return result
    
};

var chunk = function(arr, size) {
    let chunk=[]
    let index=0
    while(index<arr.length)
    {
      chunk.push(arr.slice(index,size+index))
      index+=size
    }
    return chunk
    
};
