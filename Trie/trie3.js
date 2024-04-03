class TrieNode{
    constructor(){

        this.children=new Map()
        this.end=false
    }
}


class Trie{
    
    constructor(){

        this.root=new TrieNode()
    }
    insert(word){

        let node=this.root

        for(let letter of word)
        {
            if(!node.children.has(letter))
            {
                node.children.set(letter,new TrieNode())
            }
            node=node.children.get(letter)
        }
        node.end=true
    }

    search(word)
    {
        let node=this.root
        
        for(let letter of word)
        {
            if(!node.children.has(letter))return false

            node=node.children.get(letter)
        }

        return node.end

    }
    startWith(prefix)
    {
        let node=this.root

        for(let letter of prefix)
        {
            if(!node.children.has(letter))return false

            node=node.children.get(letter)
        }
        return this.getAllWordsFromNode(node,prefix)
    }
    getAllWordsFromNode(node, prefix) {

        let words=[]

        if(node.end)
        {
            words.push(prefix)
        }
       for(let [char,childNode] of node.children)
       {
           let k=this.getAllWordsFromNode(childNode,prefix+char)
           words.push(...k)
       }
       return words
    }


}

const obj=new Trie()

obj.insert("ajmal")
obj.insert("ajkan")
obj.insert("ajsal")
obj.insert("jaseer")
obj.insert("jumana")
console.log("is there any start ",obj.startWith("aj"))

console.log(obj.search("jaseer"))