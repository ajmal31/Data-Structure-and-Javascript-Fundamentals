var minLength = function(s) {
    let str1="AB"
    let str2="CD"
    
    while(s.includes(str1)||s.includes(str2)){

        if(s.includes(str1)){
            s=s.replace(str1,"")
        }else{
            s=s.replace(str2,"")
        }
    }
    return s.length
    
};