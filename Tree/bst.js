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

}

const obj = new BinarySearchTree()
let a = obj.isEmpty()
console.log("Is it tree is empty", a)
obj.insert(10)
obj.insert(5)
obj.insert(15)
console.log(obj.search(obj.root, 10))
console.log(obj.search(obj.root, 5))
console.log(obj.search(obj.root, 15))
console.log(obj.search(obj.root, 30))