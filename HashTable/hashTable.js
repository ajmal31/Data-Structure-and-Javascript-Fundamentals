class HashTable{

    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){

        let total=0
        for(let i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){

        const index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket)
        {
            this.table[index]=[[key,value]]
        }else{

            const sameKey=bucket.find((item)=>item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
        
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        console.log("table",this.table)
        if(!bucket)console.log("values is not exist")
        else{

            let pair=bucket.find((item)=>item[0]===key)
            console.log("finded element",pair)
            return pair[1]
    
        }

    }
    values(){

        for(let i=0;i<this.table.length;i++)
        {
            if(this.table[i])console.log("index:- ",i,"value",this.table[i])
        }
    }
}
const hashtable=new HashTable(50)
hashtable.set("name","ajmal")
hashtable.set("age",19)
hashtable.set("place","Mannarkkad")
hashtable.set("education","plustwo")
// console.log("k....",k)
// hashtable.values()
hashtable.set("mane","check")
const k=hashtable.get("name")
console.log("value",k)
// hashtable.values()