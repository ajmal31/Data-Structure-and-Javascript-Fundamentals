var reformatDate = function(date) {
    let month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let map=new Map()
    for(let i=0;i<12;i++)
        {
            let val=month[i]
            if(i<9)
            map.set(val,'0'+(i+1))
            else
                map.set(val,i+1)
        }
    
    
    let d=date.split(' ').reverse()
    
    let count=map.get(d[1])
    d[1]=count
    let c=d[2].split('')
    if(c.length!==4)
        {
            c='0'+c[0]
        }
        else{
            c=c[0]+c[1]
        }
    
    d[2]=c
    return d.join("-")
};