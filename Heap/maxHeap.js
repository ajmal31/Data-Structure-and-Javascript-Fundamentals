class maxHeap{

    constructor(){
        this.heap=[]
    }

    heapPush(val)
    {
        let arr=this.heap
        arr.push(val)

        let curr=arr.length-1

        while(curr>0){
       
            let parent=Math.floor((curr-1)/2)

            if(arr[parent]<arr[curr]){

                let temp=arr[parent]
                arr[parent]=arr[curr]
                arr[curr]=temp

                curr=parent
            }else break
            
        }
    }
    maxElem(){
        return this.heap
    }

}

const obj=new maxHeap()
obj.heapPush(15)
obj.heapPush(25)
obj.heapPush(5)
obj.heapPush(8)
obj.heapPush(32)
const k=obj.maxElem()
console.log("max elem",k)