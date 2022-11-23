type Node<T> = {
    value: T
    next?: Node<T>
}

export class Stack<T> {
    root?: Node<T>

    top() {
        return this.root && this.root.value
    }

    pop() {
        if(!this.root)
            return undefined
        const result = this.root
        this.root = this.root.next
        return result.value
    }

    push(value: T) {
        const node: Node<T> = { value }
        if(this.root)
            node.next = this.root
        this.root = node
    }
}