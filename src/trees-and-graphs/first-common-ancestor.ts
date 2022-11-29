export type TreeNode<T> = {
    value: T,
    left?: TreeNode<T>,
    right?: TreeNode<T>

}

export function firstCommonAncestor<T>(tree: TreeNode<T> | undefined, ...nodes: TreeNode<T>[]): TreeNode<T> | null {
    return firstCommonAncestorContains(tree, new Set<TreeNode<T>>(), ...nodes)[1]
}

function firstCommonAncestorContains<T>(tree: TreeNode<T> | undefined, accumuldatedNodesInTree: Set<TreeNode<T>>, ...nodes: TreeNode<T>[]): [Set<TreeNode<T>>, TreeNode<T> | null] {
    if(!tree)
        return [ new Set<TreeNode<T>>(), null ]

    const accumuldatedNodesInTreeWithCurrent = new Set<TreeNode<T>>([ ...accumuldatedNodesInTree ])  
    const isTreeInNodes = nodes.includes(tree)

    if(isTreeInNodes) {
        accumuldatedNodesInTreeWithCurrent.add(tree)
        if(accumuldatedNodesInTreeWithCurrent.size === nodes.length)
            return [ new Set<TreeNode<T>>([ tree ]), null ]
    }

    const [ nodesInLeftTree, leftCommonAncestor ] = firstCommonAncestorContains(tree.left, accumuldatedNodesInTreeWithCurrent, ...nodes)
    const [ nodesInRightTree, rightCommonAncestor ] = firstCommonAncestorContains(tree.right, accumuldatedNodesInTreeWithCurrent, ...nodes)


    const nodesInTree = new Set<TreeNode<T>>([ ...nodesInLeftTree, ...nodesInRightTree ])
    if(isTreeInNodes)
        nodesInTree.add(tree)

    if(leftCommonAncestor || rightCommonAncestor)
        return [ nodesInTree, leftCommonAncestor || rightCommonAncestor ]

    return [ nodesInTree, nodesInTree.size ===  nodes.length ? tree: null ]
    
}

