class Node{

    constructor(val)
    {
        this.val=val
        this.left=null
        this.right=null
    }
}

class BST{

    constructor()
    {
        this.root=null
    }

    insert(value)
    {
        const newNode=new Node(value)
        if(!this.root)this.root=newNode
        else{

           this.addNode(this.root,newNode)
        }
    }
    addNode(root,newNode)
    {
       if(root.val<newNode.val)
       {
          if(!root.right)root.right=newNode
          else this.addNode(root.right,newNode)
       }else{
 
          if(!root.left)root.left=newNode
          else this.addNode(root.left,newNode)

       }
    }
    preOrder(root,result=[])
    {
        if(root)
        {
            result.push(root.val)
            this.preOrder(root.left,result)
            this.preOrder(root.right,result)
        }
        return result
    }
    inOrder(root,result=[])
    {
        if(root)
        {
            this.inOrder(root.left,result)
            result.push(root.val)
            this.inOrder(root.right,result)
        }

        return result
    }
    postOrder(root,result=[])
    {
        if(root)
        {
            this.postOrder(root.left,result)
            this.postOrder(root.right,result)
            result.push(root.val)
        }
        return result
    }
    smallestValue(root)
    {
        if(root.left===null) console.log("smallest value of the tree : -",root.val)
        else this.smallestValue(root.left)
    }
    largestValue(root)
    {
       if(!root.right)console.log("Largest Value of the Tree :- ",root.val)
       else this.largestValue(root.right)
    }
    bfs()
    {
        let current=this.root
        let queue=[current]
        let result=[]
        while(queue.length)
        {
            current=queue.shift()
            result.push(current.val)

            current.left&&queue.push(current.left)
            current.right&&queue.push(current.right)
        }
        return result
    }
}

const obj=new BST()
obj.insert(58)
obj.insert(75)
obj.insert(32)
obj.insert(41)
obj.insert(15)
obj.insert(21)
obj.insert(11)
obj.insert(42)
obj.insert(98)
obj.insert(74)
console.log("PRE order Traversal:- ",obj.preOrder(obj.root))
console.log("IN order Traversal:- ",obj.inOrder(obj.root))
console.log("POST order Traversal:- ",obj.postOrder(obj.root))
obj.smallestValue(obj.root)
obj.largestValue(obj.root)
console.log("BFS Traversal In tree",obj.bfs())