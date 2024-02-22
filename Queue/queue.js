class Queue{

    constructor(){
        this.queue=[]
    }

    enqueue(elem){

        this.queue.push(elem)
    }
    dequeue(){
        return this.queue.shift()
    }
    isEmpty(){

        if(this.queue.length===0)return true 
        else return false
    }
    front(){
        return this.queue[0]
    }
    rear(){
        return this.queue[this.queue.length-1]
    }
}
const obj=new Queue()
obj.enqueue(10)
obj.enqueue(20)
obj.enqueue(30)
obj.enqueue(40)
obj.enqueue(50)
const m=obj.isEmpty()
const k=obj.front()
const r=obj.rear()
