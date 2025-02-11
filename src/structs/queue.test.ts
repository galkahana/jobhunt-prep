import { describe, test, expect } from '@jest/globals'
import { Queue } from './queue'


describe('test queue', () => {
    test('null case', () => {
        expect(new Queue().top()).toBe(undefined)
    })

    test('enqueues dont change top while no dequeue', () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        expect(queue.top()).toBe(1)

        queue.enqueue(2)
        expect(queue.top()).toBe(1)

    })

    test('dequeue exposes next guy', () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).toBe(1)
        queue.enqueue(3)
        expect(queue.top()).toBe(2)
    })

    test('full dequeue goes back to none', () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBe(3)
        expect(queue.dequeue()).toBe(undefined)
    })


})

