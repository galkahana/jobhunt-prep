export type LinkedListNode<T> = {
    value: T,
    next?: LinkedListNode<T>
}

export class LinkedList<T> {
    root?: LinkedListNode<T>
    last?: LinkedListNode<T>

    isEmpty() {
        return !this.root
    }

    getRoot(): LinkedListNode<T> | undefined {
        return this.root
    }

    appendValue(value: T) {
        if(!this.root || !this.last) {
            this.root = { value }
            this.last = this.root
        }
        else {
            const newNode = { value }
            this.last.next = newNode
            this.last = newNode
        }
    }
}


export type TreeNode<T> = {
    value: T,
    left?: TreeNode<T>,
    right?: TreeNode<T>
}


export type Tree<T> = {
    root?: TreeNode<T>
}

export function listOfDepths<T>(tree: Tree<T>): LinkedList<TreeNode<T>>[]{
    if(!tree.root)
        return []

    const initialList = new LinkedList<TreeNode<T>>()
    initialList.appendValue(tree.root)

    return listOfDepthsFromPreviousList([ initialList ])
}


function listOfDepthsFromPreviousList<T>(previousLevelsList: LinkedList<TreeNode<T>>[]): LinkedList<TreeNode<T>>[] {
    const currentLevelList = new LinkedList<TreeNode<T>>()
    const previousLevelList = previousLevelsList[previousLevelsList.length - 1]

    let node = previousLevelList.getRoot()

    while(node) {
        if(node.value.left)
            currentLevelList.appendValue(node.value.left)
        if(node.value.right)
            currentLevelList.appendValue(node.value.right)
        node = node.next
    }
    
    if(currentLevelList.isEmpty())
        return previousLevelsList // k this level was all leaves...so nothing at new level...no reason to continue
    
    return listOfDepthsFromPreviousList([
        ...previousLevelsList,
        currentLevelList
    ])
}
