import { describe, expect, test } from '@jest/globals'
import { sortStack } from './sort-stack'
import { Stack } from '../structs/stack'


function arrayFromStack<T>(stack: Stack<T>) {
    const result: T[] = []
    let current: T | undefined
    while(current = stack.pop())
        result.push(current)

    return result
}

describe('sortStack test', () => {

    test('edge cases', () => {
        expect(arrayFromStack(sortStack(new Stack<number>()))).toEqual([])

        const stack = new Stack<number>()
        stack.push(1)
        expect(arrayFromStack(sortStack(stack))).toEqual([ 1 ])
    })

    test('sorts stack properly', () => {
        expect(arrayFromStack(sortStack(new Stack<number>()))).toEqual([])

        const stack = new Stack<number>()
        stack.push(1)
        stack.push(7)
        stack.push(5)
        stack.push(9)
        stack.push(2)
        expect(arrayFromStack(sortStack(stack))).toEqual([ 1, 2, 5, 7, 9 ])
    })

})