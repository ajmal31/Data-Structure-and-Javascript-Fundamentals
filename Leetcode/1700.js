var countStudents = function(students, sandwiches) {
    let count=0
    while(students.length&&sandwiches.length)
    {
        if(count>=students.length)break
        if(students[0]===sandwiches[0])
        {
            students.shift()
            sandwiches.shift()
            count=0
        }else{
          
          students.push(students.shift())
          count++

        }
    }
    return students.length
    
};