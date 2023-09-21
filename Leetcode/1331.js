var arrayRankTransform = function(arr) {
    
    let set=[...new Set(arr)].sort((a,b)=>a-b)
    let map=new Map
    
   set.forEach((elem,index)=>{
       
       map.set(elem,index+1)
       
   })
     for(let i=0;i<arr.length;i++)
         {
             arr[i]=map.get(arr[i])
         }
     return arr
    
 };