const linerSearch=(arr,target)=>{


    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===target)return console.log("Target founded😎😎",i,"postion")
    }
    return console.log("not found")


}
let arr=[12,3,3433,52,32343,123,98,7645,738,54]
const k=linerSearch(arr,52)

