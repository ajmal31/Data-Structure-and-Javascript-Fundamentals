
var findIndices = function(arr, indexDifference, valueDifference) {

    let arr3=[0,0]
    if(arr.length===1&&indexDifference===0&&valueDifference==0) return  arr3

    let arr2=[]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            let ind=Math.abs(i-j)
            let val=Math.abs(arr[i]-arr[j])
            if(ind>=indexDifference&&val>=valueDifference)
            {
                arr2.push(i,j)
                return arr2
            }
        }
    }
    arr2.push(-1,-1)
    return arr2
    
};