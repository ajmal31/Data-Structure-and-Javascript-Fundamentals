//what is currying ?

// * currying is techinic that take argument at time and return new function and expect next argument

// Why should i use currying

 //* currying is make sure that you get everyhting you need before proceed/exicution
 //* it divieds your function into smaller function that can handle one responsibliy.This make your function pure and less errror possibility
 //* it used in functional programming to create Higher order functions
 
 //Non curried Function

 function sum(a,b,c){
    
    return a+b+c

 }
 console.log("Normal function",sum(10,20,30))

 //Curried Function

 function sumUsingCurriying(a){

    return (b)=>{

        return (c)=>{

            return a+b+c
        }

    }
 }

 console.log("using curriying Technic",sumUsingCurriying(10)(20)(30))