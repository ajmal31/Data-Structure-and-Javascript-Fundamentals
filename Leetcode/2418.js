var sortPeople = function(names, heights) {
    
    let arr=[...heights].sort((a,b)=>b-a)
    let result=[]
    for(let i=0;i<arr.length;i++)
    {
       let index=heights.indexOf(arr[i])
       let name=names[index]
       result.push(name)
    }
    return result

    
};