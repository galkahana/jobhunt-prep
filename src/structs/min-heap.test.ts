import { describe, test, expect } from '@jest/globals'
import { MinHeap } from './min-heap'

describe('heap min', () => {
    test('min throws when heap empty', () => {
        const heap = new MinHeap()

        expect(()=>heap.min()).toThrow(/heap is empty/)
    })

    test('min stays the right one as items are inserted', () => {
        const heap = new MinHeap()

        heap.insertKey(10)
        expect(heap.min()).toEqual(10)

        heap.insertKey(2)
        expect(heap.min()).toEqual(2)


        heap.insertKey(7)
        expect(heap.min()).toEqual(2)
    })

})

describe('heap extract min', () => {
    test('extract min throws when heap empty', () => {
        const heap = new MinHeap()

        expect(()=>heap.extractMin()).toThrow(/heap is empty/)
    })

    test('trivial extract min (1 item) works', () => {
        const heap = new MinHeap()

        heap.insertKey(10)

        expect(heap.extractMin()).toEqual(10)
        expect(()=>heap.extractMin()).toThrow(/heap is empty/)

    })

    test('repeated extraction sorts', () => {
        const heap = new MinHeap()
        const helper: number[] = []

        heap.insertKey(10)
        heap.insertKey(2)
        heap.insertKey(1)
        heap.insertKey(7)
        heap.insertKey(5)
        heap.insertKey(9)
        heap.insertKey(4)

        let notEmpty = true
        do {
            try {
                const item = heap.extractMin()
                helper.push(item)
            } catch(ex) {
                notEmpty = false
            }
        } while(notEmpty)

        expect(helper).toEqual([ 1, 2, 4, 5, 7, 9, 10 ])

    })


})