function Node(){
    this.keys=new Map()
    this.end=false
    this.setEnd=()=>{
        this.end=true
    }
    this.isEnd=()=>{
        return this.end
    }
}

class Trie{

    constructor(){
        
        this.root=new Node()
    }

    add(input,node=this.root)
    {
        if(input.length===0)
        {
            node.setEnd()
            return
        }else{

               if(!node.keys.has(input[0]))
               {
                   node.keys.set(input[0],new Node())
                   this.add(input.substr(1),node.keys.get(input[0]))
               }else{
                  this.add(input.substr(1),node.keys.get(input[0]))
               }
        }
    }
    print(){

        let words=[]

        function search(node,string){

            if(node.keys.size!==0)
            {
                for(const letter of node.keys.keys())
                {
                    search(node.keys.get(letter),string.concat(letter))
                }
                if(node.isEnd())
                {
                    words.push(string)
                }
            }else{

                if(string.length>0)
                {
                    words.push(string)
                }
                return 
            }

        }
        search(this.root,'')
        return words.length>0 ? words :null

    }
}

const obj=new Trie()

obj.add("ajmal")
obj.add("ajman")
obj.add("ajsal")
obj.add("ajmeen")
obj.add("ameen")
obj.add("jaseer")
obj.add("mustafa")
obj.add("nadeem")
obj.add("lakshmi")
console.log(obj.print())