var minCostClimbingStairs = function(cost) {
    let arr=new Array(cost.length+1)
     arr[0]=cost[0]
     arr[1]=cost[1]
     let min;
     for(let i=2;i<arr.length;i++)
         {
             if(arr[i-1]<=arr[i-2]) min=arr[i-1]
             else min=arr[i-2]
             
            if(i===cost.length){
                arr[arr.length-1]=min
                return min
            }
            
             arr[i]=min+cost[i]
             
         }
 }