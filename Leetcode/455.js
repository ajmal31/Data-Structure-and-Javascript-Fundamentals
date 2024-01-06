var findContentChildren = function(g, s) {

    let numberOfCookies=s.length
    if(numberOfCookies===0)return 0
    s=s.sort((a,b)=>a-b)
    g=g.sort((a,b)=>a-b)

    let max=0
    let cookieIndex=s.length-1
    let childIndex=g.length-1
    while(cookieIndex>=0&&childIndex>=0){

        if(s[cookieIndex]>=g[childIndex]){
            max++
            cookieIndex--
            childIndex--
        }else{
            childIndex--
        }
    }
    return max
    
    
    
};