//Approach 1
var largestGoodInteger = function (num) {

    let arr = ["999", "888", "777", "666", "555", "444", "333", "222", "111", "000"]
    let count = 3
    let result=''
    for (let i = 0; i < num.length; i++) {

        if (i <= num.length - count) {

            let val = num.slice(i, i + count)
            if (arr.includes(val)) {
                
                if(result==='')result=val
                else if (val>result)result=val
            }
        }
       


    }
    return result

};
//Approach 2
 
var largestGoodInteger = function (num) {

    
    let result=0
    let flag=false
    for(let i=2;i<num.length;i++)
    {
        if(num[i]===num[i-1]&&num[i]===num[i-2]){
            flag=true
          result=Math.max(num[i],result)

        }
    }
    return result==0 ?'':''+result+result+result
    

};