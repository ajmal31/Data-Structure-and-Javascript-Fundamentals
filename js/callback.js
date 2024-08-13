function callback(){

    console.log("I'm a callBack function")
}

function a(callback){

    console.log("some exicutions happening")
    callback()
}

a(callback)