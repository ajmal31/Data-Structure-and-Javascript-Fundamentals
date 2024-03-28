class Node{

    constructor(val)
    {
        this.val=val
        this.next=null
    }
}

class CircularList{
    constructor(){
        this.start=null
        this.lastNode=null
    }

    insertingElement(val){

        let newNode=new Node(val)

        if(!this.start)
        {
            this.start=newNode
            this.lastNode=newNode
        }else{
 
            this.lastNode.next=newNode
            newNode.next=this.start
            this.lastNode=newNode

        }

    }
    display()
    {
      let curr=this.start
      while(curr)
      {
          console.log(curr.val)
          curr=curr.next
          if(curr.val===this.start.val)break
      }
    }
}

const obj=new CircularList

obj.insertingElement(10)
obj.insertingElement(20)
obj.insertingElement(30)
obj.insertingElement(40)
obj.insertingElement(50)
obj.insertingElement(60)
obj.insertingElement(70)

obj.display()