
var minimumCost = function(cost) {

    if(cost.length==1)return cost[0]
    if(cost.length===2)return cost.reduce((a,b)=>a+b,0)

    let sort=cost.sort((a,b)=>b-a)
    let result=0
    for(let i=0;i<sort.length;i++)
    {
        if(!sort[i+1]) return result+sort[i]
        result+=sort[i]+sort[i+1]
        i+=2
    }
    return result
    
};