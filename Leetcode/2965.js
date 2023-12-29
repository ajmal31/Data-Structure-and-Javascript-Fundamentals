var findMissingAndRepeatedValues = function (grid) {

    let result = []
    let arr = grid.flat(grid.length)
    let map = new Map()
    //this loop will be identify the Repeated values
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            result.push(arr[i])
            break

        }else map.set(arr[i],1)

    }
    //This will be find missing Value
    let max=Math.max(...arr)
    for(let i=1;i<=max+1;i++)
    {
        if(!arr.includes(i))
        {
          result.push(i)
          break
        }
    }
    return result



};