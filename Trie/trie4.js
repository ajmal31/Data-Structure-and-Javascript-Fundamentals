class TrieNode{
  
    constructor()
    {
        this.children=new Map()
        this.wordEnd=false
    }

}

class Trie{

    constructor()
    {
        this.root=new TrieNode()
    }

    insert(word)
    {
        let node=this.root

        for(let char of word)
        {
            if(!node.children.has(char))
            {
                node.children.set(char,new TrieNode())
            }
            node=node.children.get(char)
        }
        node.wordEnd=true
    }
    search(word)
    {
        let node=this.root

        for(let char of word)
        {
            if(!node.children.has(char))return false
            node=node.children.get(char)
        }
        return node.wordEnd
    }
    startWith(prefix){

        let node=this.root

        for(let char of prefix)
        {
            if(!node.children.has(char))return false
            node=node.children.get(char)
        }
        return this.takeWordsFromNode(node,prefix)
    }
    takeWordsFromNode(node,prefix)
    {
        let words=[]

        if(node.wordEnd)words.push(prefix)

        for(let [char,childNode] of node.children)
        {
            let k=this.takeWordsFromNode(childNode,prefix+char)
            words.push(k)
        }
        return words
    }


}

let obj=new Trie()

obj.insert("ajmal")
obj.insert("ajman")
obj.insert("ajsal")
obj.insert("jaseer")
obj.insert("mustafa")
obj.insert("nadeem")
obj.insert("lakshmi")

// console.log("is it word exit",obj.search("jaseer"))
console.log("is there any similar start",obj.startWith("ajma"))
