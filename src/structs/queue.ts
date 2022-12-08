type Node<T> = {
    value: T
    next?: Node<T>
}

export class Queue<T> {
    root?: Node<T>
    last?: Node<T>

    top() {
        return this.root && this.root.value
    }

    dequeue() {
        if(!this.root)
            return undefined
        const result = this.root
        this.root = this.root.next
        if(!this.root)
            this.last = undefined
        return result.value
    }

    enqueue(value: T) {
        const node = { value }
        if(!this.last) {
            this.root = node
        } else {
            this.last.next = node
        }
        this.last = node
    }
}