class Node {

    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    isEmpty() {

        return this.root === null
    }
    insert(value) {

        const newNode = new Node(value)

        if (this.isEmpty()) this.root = newNode
        else {

            this.insertNode(this.root, newNode)

        }
    }
    insertNode(root, newNode) {

        if (root.value < newNode.value) {

            if (root.right === null) root.right = newNode
            else this.insertNode(root.right, newNode)
        } else {

            if (root.left === null) root.left = newNode
            else this.insertNode(root.left, newNode)

        }

    }
    search(root, target) {
        if (!root) return false
        else {

            if (target === root.value) return true
            else if (root.value > target) return this.search(root.left, target)
            else return this.search(root.right, target)
        }

    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    minimumValue(root){

        if(root.left===null)return root.value
        else return this.minimumValue(root.left)
    }
    maximumValue(root){
        if(root.right===null)return root.value
        else return this.maximumValue(root.right)
    }

}

const obj = new BinarySearchTree()
let a = obj.isEmpty()
console.log("Is it tree is empty", a)
obj.insert(50)
obj.insert(48)
obj.insert(52)
obj.insert(45)
obj.insert(49)
obj.insert(55)
obj.insert(51)
console.log("pre order Traversal ")
obj.preOrder(obj.root)
console.log("in Order Traversal")
obj.inOrder(obj.root)
console.log("post order Traversal")
obj.postOrder(obj.root)
console.log("Minimum value of the BST:- ",obj.minimumValue(obj.root))
console.log("Maximum value of the BST:- ",obj.maximumValue(obj.root))

