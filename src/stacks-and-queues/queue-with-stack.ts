import { Stack } from '../structs/stack'


export class QueueFromStacks<T> {
    enqueueStack: Stack<T>
    dequeueStack: Stack<T> // also used for top

    constructor() {
        this.enqueueStack = new Stack<T>()
        this.dequeueStack = new Stack<T>()
    }

    isEmpty() {
        return !this.enqueueStack.top() && !this.dequeueStack.top()
    }

    private transfarStack(stackFrom: Stack<T>, stackTo: Stack<T>) {
        let current: T | undefined

        while(current = stackFrom.pop())
            stackTo.push(current)
    }

    enqueue(item: T) {
        if(this.dequeueStack.top()) {
            this.transfarStack(this.dequeueStack, this.enqueueStack)
        }
        this.enqueueStack.push(item)
    }

    dequeue() {
        if(this.enqueueStack.top()) {
            this.transfarStack(this.enqueueStack, this.dequeueStack)
        }
        return this.dequeueStack.pop()
    }

    top() {
        if(this.enqueueStack.top()) {
            this.transfarStack(this.enqueueStack, this.dequeueStack)
        }
        return this.dequeueStack.top()
    }

}