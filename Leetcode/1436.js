var destCity = function(paths) {
    //filter all out going  cities
     let set=new Set()
     for(let i=0;i<paths.length;i++)
     {
        set.add(paths[i][0])
     }
     //filter all destination cities and which one not included in out going cities
     for(let i=0;i<paths.length;i++)
     {
         if(!set.has(paths[i][1]))return paths[i][1]
     }
   
       
   };