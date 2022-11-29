export type TreeNode<T> = {
    value: T,
    left?: TreeNode<T>,
    right?: TreeNode<T>
}

export function isBalanced<T>(tree?: TreeNode<T>) {
    return isBalancedAndHeight(tree)[0]
}

function isBalancedAndHeight<T>(tree?: TreeNode<T>): [boolean, number] {
    if(!tree)
        return [ true, 0 ]

    const [ isBalancedLeft, heightLeft ]  = isBalancedAndHeight(tree.left)
    const [ isBalancedRight, heightRight ] = isBalancedAndHeight(tree.right)

    const thisHeight = Math.max(heightLeft, heightRight) + 1

    if(!isBalancedLeft || !isBalancedRight)
        return [ false, thisHeight ]

    return [ Math.abs(heightLeft - heightRight) <= 1, thisHeight ]

}