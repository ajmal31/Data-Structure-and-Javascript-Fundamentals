function grandParent(){

    let grandParent="this value exist in grandParent function"
    return function parent(){
        let parent="this value is exist in parent function"

        return function child(){

            console.log(parent)
        }
    }
}
grandParent()()()