import { describe, test, expect } from '@jest/globals'
import { SetOfStacks } from './set-of-stacks'


describe('test set of stacks', () => {
    test('null case', () => {
        expect(new SetOfStacks(2).top()).toBe(undefined)
    })

    test('pushs means top is the new one', () => {
        const stack = new SetOfStacks<number>(2)

        stack.push(1)
        expect(stack.top()).toBe(1)

        stack.push(2)
        expect(stack.top()).toBe(2)

    })

    test('pop exposes previous item', () => {
        const stack = new SetOfStacks<number>(2)

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        expect(stack.pop()).toBe(4)
        expect(stack.pop()).toBe(3)
        expect(stack.pop()).toBe(2)
        expect(stack.top()).toBe(1)
    })

    test('full dequeue goes back to none', () => {
        const stack = new SetOfStacks<number>(2)

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        stack.push(5)
        stack.push(6)
        expect(stack.pop()).toBe(6)
        expect(stack.pop()).toBe(5)
        expect(stack.pop()).toBe(4)
        expect(stack.pop()).toBe(3)
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBe(undefined)
    })


    test('pop at', () => {
        const stack = new SetOfStacks<number>(2)

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        stack.push(5)
        stack.push(6)
        expect(() => stack.popAt(4)).toThrow('index out of range')
        expect(stack.popAt(1)).toBe(4)
        expect(stack.popAt(2)).toBe(6)
        expect(stack.popAt(1)).toBe(3)
        expect(stack.popAt(1)).toBe(5)
        expect(() => stack.popAt(1)).toThrow('index out of range')
        expect(stack.popAt(0)).toBe(2)
        expect(stack.popAt(0)).toBe(1)
        expect(stack.popAt(0)).toBe(undefined) // 0 is kept there at all times...so it's fine
    })



})

