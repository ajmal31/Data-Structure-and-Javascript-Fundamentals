var canBeEqual = function(s1, s2) {

    if(s1===s2)return true
    const [a,b,c,d]=s1
    if(a+d+c+b===s2||c+b+a+d===s2||c+d+a+b===s2)return true
    else return false 
           
};