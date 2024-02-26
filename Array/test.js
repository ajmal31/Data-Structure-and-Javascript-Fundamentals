function mergeSort(arr){
    if(arr.length<2)return arr
    
    let mid=Math.floor(arr.length/2)

    const left=arr.slice(0,mid)
    const right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
    
    
    
}
const merge=(left,right)=>{
    
    let sortArr=[]
    while(left.length&&right.length)
    {
        if(left[0]<=right[0]){
            sortArr.push(left.shift())
        }else sortArr.push(right.shift())
    }
    let k=[...sortArr,...left,...right]
    console.log("sorted arrat",k)
    return k
}
let arr=[12,3,3433,52,32343,123,98,7645,738,54]
let k=mergeSort(arr)
console.log(k)