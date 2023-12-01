var findDelayedArrivalTime = function(arrivalTime, delayedTime) {

    let result=arrivalTime+delayedTime
    if(result<24)return result
    return result-=24
    
};