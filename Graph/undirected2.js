class Graph{

    constructor()
    {
        this.adjancencyList={}
    }

    insertVertex(vertex)
    {
        if(!this.adjancencyList[vertex])
        {
            this.adjancencyList[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2)
    {
        if(!this.adjancencyList[vertex1])this.insertVertex(vertex1)
        if(!this.adjancencyList[vertex2])this.insertVertex(vertex2)
       
        this.adjancencyList[vertex1].add(vertex2)
        this.adjancencyList[vertex2].add(vertex1)

    }
    display()
    {
        for(const key in this.adjancencyList)
        {
            console.log(key,"--->",...this.adjancencyList[key])
        }
    }
    bfs(graph,source)
    {
        let queue=[source]
        let visited={}
        visited[source]=true
        let result=[]

        while(queue.length)
        {
            let current=queue.shift()
            result.push(current)
            for(let neighbor of graph[current])
            {
                 if(!visited[neighbor])
                 {
                    visited[neighbor]=true
                    queue.push(neighbor)
                 }
            }
        }
        return result
    }
    dfs(graph,source){

      let stack=[source]
      let visited={}
      visited[source]=true
      let result=[]

      while(stack.length)
      {
        let current=stack.pop()
        result.push(current)
        for(let neighbor of graph[current])
        {
            if(!visited[neighbor])
            {
                visited[neighbor]=true
                stack.push(neighbor)
            }
        }
        
      }
      return result

    }

   

}   

const obj=new Graph()


obj.addEdges("A","B")
obj.addEdges("A","C")
obj.addEdges("C","K")
obj.addEdges("K","E")
obj.addEdges("E","D")
obj.display()
console.log("BFS:-",obj.bfs(obj.adjancencyList,"A"))
console.log("DFS:-",obj.dfs(obj.adjancencyList,"A"))