class MinHeap{

    constructor()
    {
        this.heap=[]
    }

    getParentIndex(i)
    {
        let k=Math.floor((i-1)/2)
        console.log("parent",this.heap[k])
        return k
    }
    getLeftChildIndex(i)
    {
        return (2*i)+1
    }
    getRightChildIndex(i)
    {
        return (2*i)+2
    }
    add(item)
    {
        this.heap.push(item)
        this.heapifyUp()
        
    }
    swap(index1,index2)
    {
        let temp=index1
        index1=index2
        index2=temp
    }
    heapifyUp()
    {

        let index=this.heap.length-1

        while(this.heap[this.getParentIndex(index)]&&this.heap[this.getParentIndex(index)]>this.heap[index])
        {
            this.swap(this.getParentIndex(index),index)
            index=this.getParentIndex(index)
        }
    }
    display()
    {
        console.log(this.heap)
    }


}

// Example usage:
const heap = new MinHeap();
heap.add(5);
heap.add(3);
heap.add(10);
heap.add(1);
heap.display()
heap.getParentIndex(0)
