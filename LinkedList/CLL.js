class Node{

    constructor(val){

        this.val=val
        this.next=null
    }
}

class CLL{

    constructor(){
        
        this.head=null
        this.tail=null
    }

    append(val){

        const newNode=new Node(val)
        if(!this.head){

            this.head=newNode
            this.tail=newNode
        }else{

            this.tail.next=newNode
            this.tail=newNode
            newNode.next=this.head
        }
    }

    traverse(){

        let curr=this.head
        let count=0
        while(curr){
            if(count!==0&&this.head.val===curr.val)break
            console.log(`Node value ${curr.val}`)
            curr=curr.next
            count++
        }
    }

    isCircular(){

        let node=this.head.next
        
        while(node!==null&&node!==this.head) node=node.next

        return node===this.head

    }
}

const obj=new CLL()
obj.append(10)
obj.append(20)
obj.append(30)
obj.traverse()
console.log("Is circular",obj.isCircular())