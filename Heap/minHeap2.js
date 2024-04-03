class MinHeap{

    constructor()
    {
       this.heap=[]
    }

    add(elem)
    {
        this.heap.push(elem)

        let current=this.heap.length-1

        while(current>0)
        {
            let parent=(current-1)/2
            if(this.heap[parent]>this.heap[current])
            {
                let temp=this.heap[parent]
                this.heap[parent]=this.heap[current]
                this.heap[current]=temp
                
            }else break
            
        }
    }
    identifyChilds(parent)
    {
        let index=this.heap.indexOf(parent)

        let leftChild=this.heap[(2*index)+1]
        let rightChild=this.heap[(2*index)+2]
        console.log("Left child",leftChild)
        console.log("Right child",rightChild)
    }
    display()
    {
        console.log(this.heap)
    }
}

const obj=new MinHeap()
obj.add(5)
obj.add(15)
obj.add(8)
obj.add(20)
obj.add(3)
obj.add(12)
obj.add(7)
obj.add(18)
obj.add(9)
obj.add(11)
obj.add(14)
obj.add(6)
obj.add(16)
obj.add(4)
obj.add(13)
obj.display()
obj.identifyChilds(5)