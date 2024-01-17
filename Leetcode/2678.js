var countSeniors = function(details) {

    
    let ageIndex=11
    let count=0
    for(let i=0;i<details.length;i++)
    {
        let elem=details[i]
        let age=elem[ageIndex]+elem[ageIndex+1]
        if(age>60)count++
    }
    return count
};