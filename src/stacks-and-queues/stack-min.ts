import { Stack } from '../structs/stack'

export class StackMin {
    stack: Stack<number>
    stackMin: Stack<number>

    constructor() {
        this.stack = new Stack<number>()
        this.stackMin = new Stack<number>()
    }

    top() {
        return this.stack.top()
    }

    pop() {
        const el = this.stack.pop()
        if(el !== undefined && el === this.stackMin.top())
            this.stackMin.pop()
        return el
    }

    push(value: number) {
        this.stack.push(value)
        const currentMin = this.stackMin.top()
        if(currentMin === undefined || currentMin >= value)
            this.stackMin.push(value)
    }

    min() {
        return this.stackMin.top()
    }
}