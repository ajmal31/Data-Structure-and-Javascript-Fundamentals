
var replaceDigits = function(s) {

    let str=s.split('')
    for(let i=0;i<str.length;i++)
    {
        if(i%2!==0)
        {
            let ascci=(str[i-1].charCodeAt(0))+Number(str[i])
            str[i]=String.fromCharCode(ascci)
        }
    }
    return str.join('')
    
}    