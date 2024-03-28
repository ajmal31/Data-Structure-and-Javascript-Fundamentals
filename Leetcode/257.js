var binaryTreePaths = function (root) {
    let paths = []
    function dfs(node, path) {
        if (!node) return
        path.push(node.val.toString())
        if (!node.left && !node.right) {

            paths.push(path.join("->"))

        } else {
            dfs(node.left, path.slice())
            dfs(node.right, path.slice())

        }

    }

    dfs(root,[])
    return paths

};