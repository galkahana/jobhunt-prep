export type BSTNode<T> = {
    value: T
    left?: BSTNode<T>
    right?: BSTNode<T>
}

export function getLowerBST<T>(arr:T[], start = 0, end = arr.length-1): BSTNode<T> | undefined {
    if(end<start)
        return undefined
    const index = Math.floor(((start + end)/2))

    const node: BSTNode<T> = { value: arr[index] }
    node.left = getLowerBST(arr, start, index-1)
    node.right = getLowerBST(arr, index+1, end)
    return node
}