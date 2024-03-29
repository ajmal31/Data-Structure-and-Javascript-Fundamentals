function Node(){

    this.keys=new Map()
    this.end=false
    this.setEnd=function(){
        this.end=true
    }
    this.isEnd=function (){
        return this.end
    }

}


class Trie{


    constructor(){
        this.root=new Node()
    }

    // ajmal
    // add(input,node=this.root)
    // {
    //     console.log("input",input)
    //     if(input.length===0)
    //     {
    //        node.setEnd()
    //        return 
    //     }else if(!node.keys.has(input[0])){
            
    //         node.keys.set(input[0],new Node())
    //         return this.add(input.substr(1),node.keys.get(input[0]))
           
    //     }else{
           
    //         return this.add(input.substr(1),node.keys.get(input[0]))

    //     }
    // }
    // add(input,node=this.root)
    // {
    //     if(input.length===0)
    //     {
    //         node.setEnd()
    //         return 
    //     }else{

    //       if(!node.keys.has(input[0]))
    //       {
    //         node.keys.set(input[0],new Node())
    //         this.add(input.substr(1),node.keys.get(input[0]))
    //       }else {
            
    //         this.add(input.substr(1),node.keys.get(input[0]))

    //       }

    //     }
    // }
 
    print(){
        let words=new Array()
        
        let search=function (node=this.root,string)
        {
            if(node.keys.size!==0)
            {
                for(let letter of node.keys.keys())
                {
                    search(node.keys.get(letter),string.concat(letter))
                }
                if(node.isEnd())
                {
                    words.push(string)
                }
            }else{
                string.length>0 ? words.push(string):undefined
                return 
            }
        }
        search(this.root,new String())
        return words.length>0 ? words :null

    }


}

const obj=new Trie()

obj.add("ajmal")
obj.add("ajsal")
obj.add("jaseer")
obj.add("mustafa")
obj.add("nadeem")
obj.add("lakshmi")
console.log(obj.print())