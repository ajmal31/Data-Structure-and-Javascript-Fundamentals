const quickSort=(arr)=>{
    if(arr.length<2)return arr
    const left=[]
    const right=[]
    const pivot=arr[arr.length-1]

    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]<pivot)left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]


}
let arr=[12,3,3433,52,32343,123,98,7645,738,54]
const k=quickSort(arr)
console.log("result quick sort",k)