//Approach One
var checkString = function(s) {

    let bFound=false
    for(let i=0;i<s.length;i++)
    {
       if(bFound&&s[i]==="a")return false
       if(s[i]==='b') bFound=true
    }
    return true
};
//Approach 2
var checkString = function(s) {

    if(!s.includes('b'||'a')) return true
    let index=s.indexOf('b')
    for(let i=index;i<s.length;i++)
    {
        if(s[i]==='a')return false
    }
    return true
};
//Approach 3

var checkString = function(s) {

    return s.indexOf('ba')===-1
};
