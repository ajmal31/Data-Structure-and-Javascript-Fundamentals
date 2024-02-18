function mergeSort(arr){
    if(arr.length<2)return arr

    //find mid
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))

}

const merge=(leftArr,rightArr)=>{
 
    const sortArr=[]

    while(leftArr.length&&rightArr.length)
    {
        if(leftArr[0]<=rightArr[0])
        sortArr.push(leftArr.shift())
        else sortArr.push(rightArr.shift())
    }
    return [...sortArr,...leftArr,...rightArr]


}
let arr=[12,3,3433,52,32343,123,98,7645,738,54]
const result=mergeSort(arr)
console.log(result)