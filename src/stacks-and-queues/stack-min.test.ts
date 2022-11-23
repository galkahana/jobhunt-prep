import { describe, test, expect } from '@jest/globals'
import { StackMin } from './stack-min'


describe('test like regular stack', () => {
    test('null case', () => {
        expect(new StackMin().top()).toBe(undefined)
    })

    test('pushs means top is the new one', () => {
        const stack = new StackMin()

        stack.push(1)
        expect(stack.top()).toBe(1)

        stack.push(2)
        expect(stack.top()).toBe(2)

    })

    test('pop exposes previous item', () => {
        const stack = new StackMin()

        stack.push(1)
        stack.push(2)
        expect(stack.pop()).toBe(2)
        expect(stack.top()).toBe(1)
    })

    test('full dequeue goes back to none', () => {
        const stack = new StackMin()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toBe(3)
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBe(undefined)
    })


})

describe('test min functionality', () => {
    test('null case', () => {
        expect(new StackMin().min()).toBe(undefined)
    })    

    test('min works through push and pop', () => {
        const stack = new StackMin()

        stack.push(10)
        expect(stack.min()).toBe(10)
        stack.push(7)
        expect(stack.min()).toBe(7)
        stack.push(4)
        expect(stack.min()).toBe(4)
        stack.push(8)
        expect(stack.min()).toBe(4)
        stack.push(3)
        expect(stack.min()).toBe(3)
        stack.push(9)
        expect(stack.min()).toBe(3)
        stack.pop()
        expect(stack.min()).toBe(3)
        stack.pop()
        expect(stack.min()).toBe(4)
        stack.pop()
        expect(stack.min()).toBe(4)
        stack.pop()
        expect(stack.min()).toBe(7)
        stack.pop()
        expect(stack.min()).toBe(10)
        stack.pop()
        expect(stack.min()).toBe(undefined)
    })    

})
