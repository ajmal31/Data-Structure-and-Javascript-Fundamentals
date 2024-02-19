

class Stack{

    constructor(){
        this.stack=[]
    }
    push(elem){

       this.stack.push(elem)
    }
    pop(){
       
        return this.stack.pop() 
    }
    isEmpty(){
        
        if(this.stack.length!==0)return false
        else return true

    }
    peek(){

        return this.stack[this.stack.length-1] ? this.stack.length!==0 : console.log("stack does'nt contain elements") 
    }
}
const obj=new Stack()
// obj.push(10)
// obj.push(20)
// obj.push(30)
// obj.push(40)
// obj.push(50)
// obj.push(60)
// obj.push(70)
obj.pop()
const m=obj.isEmpty()
const k=obj.peek()
console.log("isEmpty",m)
console.log("peek",k)