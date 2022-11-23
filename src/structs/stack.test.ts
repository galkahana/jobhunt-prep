import { describe, test, expect } from '@jest/globals'
import { Stack } from './stack'


describe('test stack', () => {
    test('null case', () => {
        expect(new Stack().top()).toBe(undefined)
    })

    test('pushs means top is the new one', () => {
        const stack = new Stack<number>()

        stack.push(1)
        expect(stack.top()).toBe(1)

        stack.push(2)
        expect(stack.top()).toBe(2)

    })

    test('pop exposes previous item', () => {
        const stack = new Stack<number>()

        stack.push(1)
        stack.push(2)
        expect(stack.pop()).toBe(2)
        expect(stack.top()).toBe(1)
    })

    test('full dequeue goes back to none', () => {
        const stack = new Stack<number>()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toBe(3)
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBe(undefined)
    })


})

