import { Stack } from '../structs/stack'

class StackWithCapacity<T> extends Stack<T> {
    capacity: number
    total: number

    constructor(capacity: number) {
        super()
        this.total = 0
        this.capacity = capacity
    }

    push(value: T) {
        if(this.capacity === this.total)
            throw Error('no capcity')
        ++this.total
        super.push(value)
    }

    pop() {
        if(this.total === 0)
            return undefined
        --this.total
        return super.pop()
    }

}


export class SetOfStacks<T> {
    stacks: StackWithCapacity<T>[]
    capacity: number

    constructor(capacity: number) {
        this.capacity = capacity
        this.stacks = [ new StackWithCapacity<T>(this.capacity) ]
    }

    private currentStack() {
        return this.stacks[this.stacks.length-1]
    }

    top() {
        return this.currentStack().top()
    }

    pop(): T | undefined {
        const result = this.currentStack().pop()
        if(result === undefined && this.stacks.length > 1) {
            this.stacks.pop()
            return this.currentStack().pop()
        }
        return result
    }

    push(value: T) {
        try {
            this.currentStack().push(value)
        } catch(ex) {
            this.stacks.push(new StackWithCapacity<T>(this.capacity) )
            this.currentStack().push(value)
        }
    }   
    
    popAt(index: number): T | undefined {
        if(index > this.stacks.length -1 || index < 0)
            throw new Error('index out of range')

        const result = this.stacks[index].pop()
        if(result === undefined && this.stacks.length > 1) {
            this.stacks.splice(index, 1)
            return this.popAt(index)
        }
        return result
        
    }
}