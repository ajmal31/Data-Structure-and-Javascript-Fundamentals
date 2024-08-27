

// * Do insertion at the head
// * on every read or update operation detach the node from it's position and attach it at the head of linkedList
// * When cache limit exceeds remove a node from the tail
// * Store key: Node relation in an object, so that retrieval is possible in O(1).

class Node {

    constructor(key, val, next = null, prev = null) {

        this.key = key
        this.val = val
        this.next = next
        this.prev = prev
    }
}

class LRU {

    constructor(limit = 3) {

        this.size = 0
        this.limit = limit
        this.head = null
        this.tail = null
        this.cacheMap = {}

    }

    // write function requirements and boundaries
    // if any values read,add or update should be comes top priority
    // only add value if cache memory have enough space if there is no space create it ( remove least used value)

    // Alogorithm
    //  * Take two inputs key and value
    //  * Check the value is Alread exist in cache memory
    //  * if the values not exist add it 
    //  * before adding check the object is reach the limit or not if it is reached remove least used value then add it  
    //  * when you are adding check list have head or not if there is no head assign to head and tail
    //  * if the Head exist newNode should be a head existing head should be a second node
    //  * if the value is exist in cache remove it then add the key value then only it will come top of the object
    //  * add to the cache memory update the size if it's needed

    write(key, value) {

        const existInCache = this.cacheMap[key]

        if (existInCache) {
            //remove the value from the cache and add it once again 
            this.detach(existInCache)
            this.size--
        } else if(this.size === this.limit)
        {
            // remove the least used value from the cache memory then add it
            delete this.cacheMap[this.tail.key]
            this.detach(this.tail)
            this.size--
        }

        if (!this.head) {

            this.head = this.tail= new Node(key,value)
        } else {

            let newNode = new Node(key, value, this.head)
            this.head.prev = newNode
            this.head = newNode
        }

        this.cacheMap[key]=this.head
        this.size++

    }
    detach(node) {

        if (!node.prev) {

            this.head = node.next
        } else {

            node.prev.next = node.next
            // console.log("confused one", node.prev.next.prev)
        }

        if (!node.next) {

            this.tail = node.prev
        } else {

            node.next.prev = node.prev
            // console.log("confusion two", node.prev.next)
        }

    }
}


const obj = new LRU()
obj.write("a",10)
obj.write("b",20)
obj.write("c",30)
obj.write("d",40)
obj.write("b",21)
console.log(obj.cacheMap)
console.log(obj.cacheMap[obj.head.key])