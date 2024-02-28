function fibnocci(n){
    let arr=[0,1]
    
    for(let i=2;i<=n;i++)
    {
        arr.push(arr[i-2]+arr[i-1])
    }
    return arr[n]
}
let pos=10
const k=fibnocci(pos)
console.log(`${pos}th fibbnocci Number:- ${k}`)