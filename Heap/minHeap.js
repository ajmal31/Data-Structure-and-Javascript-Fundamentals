class MinHeap{

    constructor(){
        this.heap=[]
    }

    push(val){

        this.heap.push(val)

        let curr=this.heap.length-1

        while(curr>0){

            let parent=Math.floor((curr-1)/2)

            if(this.heap[parent]>this.heap[curr]){

                let temp=this.heap[parent]
                this.heap[parent]=this.heap[curr]
                this.heap[curr]=temp

                curr=parent
            }else break
            

        }
    }
    minElem(){
        return this.heap[0]
    }

}

const obj=new MinHeap()
obj.push(10)
obj.push(28)
obj.push(7)
obj.push(13)
let k=obj.minElem()
console.log("k",k)