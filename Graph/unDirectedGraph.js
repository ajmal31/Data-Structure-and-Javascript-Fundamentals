class Graph{

    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){

        if(!this.adjacencyList[vertex])this.adjacencyList[vertex]=new Set()
        
    }

    addEdges(vertex1,vertex2){
        
        if(!this.adjacencyList[vertex1]){
           
            this.addVertex(vertex1)

        }
        if(!this.adjacencyList[vertex2])
        {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }
    removeEdge(vertex1,vertex2){

        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex)
    {
        for(const key of this.adjacencyList[vertex])
        {
            console.log("key",key)
            this.removeEdge(key,vertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){

        for(let vertex in this.adjacencyList)
        {
            console.log(vertex,"->",...[...this.adjacencyList[vertex]])
        }
    }

    bfs(start){

        let queue=[start]

        let result=[]
        let visited={}

        visited[start]=true

        while(queue.length)
        {
            let currentVertex=queue.shift()

            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach((val)=>{

                if(!visited[val])
                {
                    visited[val]=true
                    queue.push(val)
                }
            })
        }

        console.log("result")
        console.log(result)

    }
    

}

const graph=new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("D")

graph.addEdges("A","B")
graph.addEdges("A","C")
graph.addEdges("C","K")
graph.addEdges("K","E")
graph.addEdges("E","D")

graph.display
graph.removeVertex("A")
// console.log("after edge deletion")
// graph.display()
// graph.bfs("A")