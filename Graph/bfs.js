const graph={

    a:["b","c"],
    b:["d"],
    c:["e"],
    e:[],
    d:["f"],
    f:[]
    
 
 }

 function breadthFirstSearch(graph,source){

    let queue=[source]

    while(queue.length>0)
    {
        let current=queue.shift()
        console.log(current)
        for(const neighbors of graph[current])
        {
            queue.push(neighbors)
        }
    }

}

breadthFirstSearch(graph,"a")