class Node{

    constructor(val){
        this.val=val
        this.next=null
    }
}

class singleLinkedlist{

    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    //appending
    push(val){

        const newNode=new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        }else{
          
          this.tail.next=newNode
          this.tail=newNode

        }
        this.length++
    }
    //printing all values
    print(){
   
        let temp=this.head
        while(temp.next!==null)
        {
            console.log("nodes",temp.val)
            temp=temp.next
        }

    }
}

const list=new singleLinkedlist()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(60)
list.push(70)
list.print()


