class Node{

    constructor(val)
    {
        this.val=val
        this.prev=null
        this.next=null
    }

}

class DoublyList{

    constructor()
    {
        this.head=null
        this.tail=null
        this.length=0
    }
    insertElement(val)
    {
       let newNode=new Node(val)
       if(!this.head){
        this.head=newNode
        this.tail=newNode
       }
       else{
         
           this.tail.next=newNode
           newNode.prev=this.tail
           this.tail=newNode

       }
       

    }
    forward()
    {
        let curr=this.head
        while(curr)
        {
            console.log(curr.val)
            curr=curr.next
        }
    }
    backWard()
    {
        let curr=this.tail

        while(curr)
        {
            console.log(curr.val)
            curr=curr.prev
        }
    }
   

}

const obj=new DoublyList

obj.insertElement(10)
obj.insertElement(20)
obj.insertElement(30)
obj.insertElement(40)
obj.insertElement(50)
obj.insertElement(60)
obj.insertElement(70)

obj.forward()
console.log("backward")
obj.backWard()