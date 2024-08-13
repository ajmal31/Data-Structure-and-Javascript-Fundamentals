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
}

const obj=new DDL()
obj.append(10)
obj.append(20)
obj.append(30)
obj.append(40)
obj.append(50)
obj.append(60)
obj.forward()
console.log("------------")
obj.backward()