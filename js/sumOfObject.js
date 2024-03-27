const bc = [{ af: 4, lk: [3, 4, 23, 4] }, { af: 4, lk: [3, 4, 23, 4] }, { af: 4, lk: [3, 4, 23, 4] }, { af: 4, lk: [3, 4, 23, 4] }];
let sum=0
for(const key of bc)
{

    let k=Object.values(key).flat(Infinity)
    sum+=k.reduce((acc,val)=>acc+val,0)
}
console.log(sum)




