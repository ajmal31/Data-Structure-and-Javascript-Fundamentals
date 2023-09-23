var smallerNumbersThanCurrent = function(arr) {
    
    let final=[]
    let i=0;
    let res=recursion(arr,i,final)
    return res
     
 }
 
 function recursion(arr,i,final)
 {
     let count=0
     if(arr[i]!==undefined)
         {
             for(let j=0;j<arr.length;j++)
                 {
                     if(arr[i]>arr[j])
                         {
                             count++
                         }
                 }
             final.push(count++)
             i++
            return  recursion(arr,i,final)
             
         }else
             {
                 
                 return final
             }
 }