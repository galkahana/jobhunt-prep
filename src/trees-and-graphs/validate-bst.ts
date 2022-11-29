export type TreeNode<T> = {
    value: T,
    left?: TreeNode<T>,
    right?: TreeNode<T>
}


export function validateBST(tree?: TreeNode<number>) {
    if(!tree)
        return true

    return validateBSTSubtree(tree.left, Number.MIN_VALUE, tree.value) && validateBSTSubtree(tree.right, tree.value, Number.MAX_VALUE)
}

function validateBSTSubtree(tree: TreeNode<number> | undefined, strictMin: number, max: number): boolean {
    if(!tree)
        return true
    
    const currentValue = tree.value
    
    if(currentValue <= strictMin || currentValue > max)
        return false

    return validateBSTSubtree(tree.left, strictMin, tree.value) && validateBSTSubtree(tree.right, tree.value, max)
}