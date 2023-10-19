
var maximumWealth = function(accounts) {

    let rich;
    let sum;
    for(let i=0;i<accounts.length;i++)
    {
        sum=accounts[i].reduce((acc,val)=>acc+val,0)
     
        if(rich===undefined) rich=sum
        else if (rich<sum){
            rich=sum
        }

    }
    return rich
    
    
};