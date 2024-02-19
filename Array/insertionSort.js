const insertionSort=(arr)=>{

      for(let i=1;i<arr.length;i++)
      {
         let insertElem=arr[i]
         let j=i-1
         while(j>=0&&arr[j]>insertElem)
         {
            arr[j+1]=arr[j]
            j--
         }
         arr[j+1]=insertElem
      }
      return arr

}
let arr=[12,3,3433,52,32343,123,98,7645,738,54]
const k=insertionSort(arr)
console.log("result of inserion sort",k)