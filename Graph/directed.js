class Graph{

   constructor(){
      this.adjacencyList={}
   }

   insertVertex(vertex)
   {
      if(!this.adjacencyList[vertex])
      {
        this.adjacencyList[vertex]=new Set()
      }  
   }

   addEdges(vertex1,vertex2)
   {
       if(!this.adjacencyList[vertex1])this.insertVertex(vertex1)
       if(!this.adjacencyList[vertex2])this.insertVertex(vertex2)

       this.adjacencyList[vertex1].add(vertex2)
   }
   display()
   {
      for(const key in this.adjacencyList)
      {
           console.log(key,"-->",[...this.adjacencyList[key]])
      }
   }
   BFS(list,source)
   {
      let queue=[source]
      let visited={}
      visited[source]=true
      while(queue.length)
      {
        let current=queue.shift()
        console.log(current)
        for(let neighbors of list[current])
        {
            if(!visited[neighbors])
            {
                visited[neighbors]=true
                queue.push(neighbors)

            }
           

        }
      }
   }

}

const obj=new Graph()

obj.insertVertex("A")
obj.insertVertex("B")
obj.insertVertex("C")
obj.insertVertex("D")
obj.addEdges("A","C")
obj.addEdges("M","J")
obj.addEdges("B","D")
// obj.addEdges("J","A")
obj.addEdges("A","M")
obj.addEdges("J","A")

obj.display()
console.log("after priting")
obj.BFS(obj.adjacencyList,"A")