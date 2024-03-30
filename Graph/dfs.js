const graph={

   a:["b","c"],
   b:["d"],
   c:["e"],
   e:[],
   d:["f"],
   f:[]
   

}

// function depthFirstSearch(graph,source){

//     let stack=[source]

//     while(stack.length>0)
//     {
//       let current=stack.pop()
//       console.log(current)
//       for(const key of graph[current])
//       {
//          stack.push(key)
//       }
//     }

// }

function depthFirstSearch(graph,source)
{
    console.log(source)
    for(let neighbor of graph[source])
    {
        depthFirstSearch(graph,neighbor)
    }
}

depthFirstSearch(graph,"a")

