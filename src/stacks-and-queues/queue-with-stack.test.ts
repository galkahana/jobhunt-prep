import { describe, test, expect } from '@jest/globals'
import { QueueFromStacks } from './queue-with-stack'


describe('test queue', () => {
    test('null case', () => {
        expect(new QueueFromStacks().top()).toBe(undefined)
    })

    test('is empty', () => {
        const queue = new QueueFromStacks()

        expect(queue.isEmpty()).toBe(true)

        queue.enqueue(6)

        expect(queue.isEmpty()).toBe(false)

        queue.dequeue()

        expect(queue.isEmpty()).toBe(true)
    })    

    test('enqueues dont change top while no dequeue', () => {
        const queue = new QueueFromStacks<number>()

        queue.enqueue(1)
        expect(queue.top()).toBe(1)

        queue.enqueue(2)
        expect(queue.top()).toBe(1)

    })

    test('dequeue exposes next guy', () => {
        const queue = new QueueFromStacks<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).toBe(1)
        queue.enqueue(3)
        expect(queue.top()).toBe(2)
    })

    test('full dequeue goes back to none', () => {
        const queue = new QueueFromStacks<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBe(3)
        expect(queue.dequeue()).toBe(undefined)
    })


})

