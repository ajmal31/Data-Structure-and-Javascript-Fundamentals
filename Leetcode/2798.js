var numberOfEmployeesWhoMetTarget = function(hours, target) {

    let count=0
    hours.forEach((val)=>{
     
     if(val>=target)count++

    })
    return count
   

    
};