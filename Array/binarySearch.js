const binarySerch=(arr,target,start,end)=>{

    if(start>end)return false
    const mid=Math.floor((start+end)/2)

   if(arr[mid]===target)return mid
   if(mid<target)return binarySerch(arr,target,mid+1,end)
   else return binarySerch(arr,target,start,mid-1)

    

}
let arr=[1,2,3,4,5,6,7,8,9,10]
const k=binarySerch(arr,9,0,arr.length-1)
console.log("result",k)