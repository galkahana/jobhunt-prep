export type TreeNode<T> = {
    value: T,
    left?: TreeNode<T>,
    right?: TreeNode<T>
}


export function isSubTree<T>(t1?: TreeNode<T>, t2?: TreeNode<T>): boolean {
    if(!t1) {
        return !t2
    }

    if(matchTree(t1, t2))
        return true

    return isSubTree(t1.left, t2) || isSubTree(t1.right, t2)
}

function matchTree<T>(t1?: TreeNode<T>, t2?: TreeNode<T>): boolean {
    if(!t1 || !t2) {
        if(!t1 && !t2)
            return true
    
        if(!t1 && t2)
            return false

        return false // t1 && !t2
    }

    if(t1.value !== t2.value)
        return false

    return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right)
}