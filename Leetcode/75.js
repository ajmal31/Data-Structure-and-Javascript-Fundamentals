
let count=map.get(word[i])
if(count===1)
    map.delete(word[i])
  else
      map.set(word[i],count-1)