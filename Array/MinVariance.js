
//Question : Split the arra into subarray . subArray only valid when meet the conditions
   //conditions
    // * SubArray start and end element should be same
    // * Atleast 2 elements
    // * sub array is contigious elements of original array
// in this subArray you shoul find the variance of the array
   // Variance Defined
   // * length of subArray - count of first element of the array   
function MinVariance(arr){

    // Iterate start element with end element - end element defined same element found in array & not count already
    //once iteration completed not found same end element shoud switch to next elment & that element shoud not be couted index element
    // counte of first element repeted
    // length - count = variance < old_variance=varinace
    
    let set=new Set()
    let minVariance=null
    let startDate=new Date()
    for(let i=0;i<arr.length;i++){

        for(let j=i+1;j<arr.length;j++){
           
            if(arr[i]===arr[j]&&!set.has(j)&&!set.has(i)){
                let temp=arr.slice(i,j+1)
                let countOfFirstElement=temp.reduce((count,k)=>{
                    if(k===temp[0])count++
                    return count
                },0)
                const newVariance=temp.length-countOfFirstElement
                minVariance=Math.min(minVariance,newVariance)
            }
        }
        
    }
    const endDate=new Date()
    const diff=endDate-startDate
    return minVariance

    // return variance
}

let arr=[3,6,4,6,3,3]

// Arrays
   // * [3,6,4,6,3]


console.log(MinVariance(arr))