class Node{

    constructor(val){

        this.val=val
        this.prev=null
        this.next=null
    }
}

class DDL{

    constructor(){

        this.head=null
        this.tail=null
        this.length=0
    }
    append(val){

        const newNode=new Node(val)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{

            newNode.prev=this.tail
            this.tail.next=newNode
            this.tail=newNode
        }

    }
    forward(){

        let temp=this.head

        while(temp){
            console.log(temp.val)
            temp=temp.next
        }
    }
    backward(){

        let temp=this.tail
        while(temp)
        {
            console.log(temp.val)
            temp=temp.prev
        }
    }
    reverse(){
          
        let curr=this.head
        let prev=null
        while(curr!==null){

           prev=curr.prev
           curr.prev=curr.next
           curr.next=prev
           
           curr=curr.prev
        }
       
        this.head=prev.prev
        console.log("DDL Reversed")
    }
}

const obj=new DDL()
obj.append(10)
obj.append(20)
obj.append(30)
obj.append(40)
console.log("forward")
obj.forward()
console.log("------------")
console.log("backword")
obj.backward()

obj.reverse()

console.log("forward")
obj.forward()
console.log("------------")
console.log("backword")
obj.backward()