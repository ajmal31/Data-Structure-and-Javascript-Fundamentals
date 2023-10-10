var thousandSeparator = function(n) {
    let arr=""+n
    arr=arr.split("").reverse().join("")
    let b=[]
    for(let i=0;i<arr.length;i++)
        {
            if(i%3===0&&i!=0)
                {
                    b.push('.')
                }
            b.push(arr[i])
        }
    return b.reverse().join("")
    
};