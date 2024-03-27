class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}

class Bst{
    constructor(){
        this.root=null
    }
    insert(val){
        
        let newNode= new Node(val)
        if(!this.root)this.root=newNode
        else{
            this.insertNode(this.root,newNode)
        }
        
    }
    insertNode(root,newNode){
        
             if(root.val<newNode.val)
             {
                 if(!root.right) root.right=newNode
                 else this.insertNode(root.right,newNode)
             }else {
                 
                 if(!root.left) root.left=newNode
                 else this.insertNode(root.left,newNode)
             }
        
    }
    preOrder(root)
    {
        if(root)
        {
            console.log(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
        
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.val)
            this.inOrder(root.right)
            
        }
    }
    postOrder(root)
    {
        if(root)
        {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.val)
        }
    }
    BFS(){
    
        let queue=[]
        let result=[]

        let currentNode=this.root
        queue.push(currentNode)

        while(queue.length)
        {
            currentNode=queue.shift()
            result.push(currentNode.val)

            currentNode.left&&queue.push(currentNode.left)
            currentNode.right&&queue.push(currentNode.right)
        }
        console.log("tree result")
        console.log(result)
        
    }
}

const obj=new Bst()
obj.insert(10)
obj.insert(5)
obj.insert(35)
obj.insert(3)
obj.insert(8)
obj.insert(30)
obj.insert(40)
obj.insert(2)
obj.insert(4)
obj.insert(7)
obj.insert(9)
obj.insert(28)
obj.insert(32)
obj.insert(37)
obj.insert(49)
// obj.preOrder(obj.root)
// obj.inOrder(obj.root)
// obj.postOrder(obj.root)
obj.BFS()