export type TreeNode<T> = {
    value: T,
    left?: TreeNode<T>,
    right?: TreeNode<T>

}

export function firstCommonAncestor<T>(tree: TreeNode<T> | undefined, ...nodes: TreeNode<T>[]): TreeNode<T> | null {
    return firstCommonAncestorContains(tree, ...nodes)[1]
}

function firstCommonAncestorContains<T>(tree: TreeNode<T> | undefined, ...nodes: TreeNode<T>[]): [Set<TreeNode<T>>, TreeNode<T> | null] {
    if(!tree)
        return [ new Set<TreeNode<T>>(), null ]

    const nodeIsTree = nodes.includes(tree) ? new Set<TreeNode<T>>([ tree ]): new Set<TreeNode<T>>()
    const [ nodesInLeftTree, leftCommonAncestor ] = firstCommonAncestorContains(tree.left, ...nodes)
    const [ nodesInRightTree, rightCommonAncestor ] = firstCommonAncestorContains(tree.right, ...nodes)


    const nodesInTree = new Set<TreeNode<T>>([ ...nodesInLeftTree, ...nodesInRightTree, ...nodeIsTree ])

    if(leftCommonAncestor || rightCommonAncestor)
        return [ nodesInTree, leftCommonAncestor || rightCommonAncestor ]

    return [ nodesInTree, nodesInTree.size ===  nodes.length ? tree: null ]
    
}

