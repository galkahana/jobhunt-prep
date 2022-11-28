export type BSTNode<T> = {
    value: T
    left?: BSTNode<T>
    right?: BSTNode<T>
    parent?: BSTNode<T>
}

export function getSuccessor<T>(node?: BSTNode<T>): BSTNode<T> | undefined {
    if(!node)
        return undefined

    if(node.right) {
        return leftMost(node.right)
    }
    else {
        return firstRightParent(node)
    }
}


function leftMost<T>(node: BSTNode<T>): BSTNode<T> {
    return node.left ? leftMost(node.left) : node
}

function firstRightParent<T>(node: BSTNode<T>): BSTNode<T> | undefined {
    if(!node || !node.parent)
        return undefined

    if(node === node.parent.left)
        return node.parent
    
    return firstRightParent(node.parent)
}