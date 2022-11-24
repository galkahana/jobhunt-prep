import { describe, test, expect } from '@jest/globals'
import { PriorityQueue } from './priority-queue'

describe('heap empty', () => {
    test('check empty through changes', () => {
        const heap = new PriorityQueue<number>()

        expect(heap.isEmpty()).toBe(true)

        heap.insert({ data:1, value:1 })
        expect(heap.isEmpty()).toBe(false)

        heap.extractMin()

        expect(heap.isEmpty()).toBe(true)

    })
})


describe('heap min', () => {
    test('min throws when heap empty', () => {
        const heap = new PriorityQueue<number>()

        expect(()=>heap.min()).toThrow(/heap is empty/)
    })

    test('min stays the right one as items are inserted', () => {
        const heap = new PriorityQueue<number>()

        heap.insert({ value:10, data:10 })
        expect(heap.min().data).toEqual(10)

        heap.insert({ value:2, data:2 })
        expect(heap.min().data).toEqual(2)


        heap.insert({ value:7, data:7 })
        expect(heap.min().data).toEqual(2)
    })

})

describe('heap extract min', () => {
    test('extract min throws when heap empty', () => {
        const heap = new PriorityQueue<number>()

        expect(()=>heap.extractMin()).toThrow(/heap is empty/)
    })

    test('trivial extract min (1 item) works', () => {
        const heap = new PriorityQueue<number>()

        heap.insert({ value:10, data:10 })

        expect(heap.extractMin().data).toEqual(10)
        expect(()=>heap.extractMin()).toThrow(/heap is empty/)

    })

    test('repeated extraction sorts', () => {
        const heap = new PriorityQueue<number>()
        const helper: number[] = []

        heap.insert({ value:10, data:10 })
        heap.insert({ value:2, data:2 })
        heap.insert({ value:1, data:1 })
        heap.insert({ value:7, data:7 })
        heap.insert({ value:5, data:5 })
        heap.insert({ value:9, data:9 })
        heap.insert({ value:4, data:4 })

        let notEmpty = true
        do {
            try {
                const item = heap.extractMin().data
                helper.push(item)
            } catch(ex) {
                notEmpty = false
            }
        } while(notEmpty)

        expect(helper).toEqual([ 1, 2, 4, 5, 7, 9, 10 ])

    })


})


describe('descrease key', () => {
    test('decreasing value changes order properly', () => {
        const heap = new PriorityQueue<string>()
        const helper: string[] = []

        heap.insert({ value:10, data:'A' })
        heap.insert({ value:2, data:'B' })
        heap.insert({ value:1, data:'C' })
        heap.insert({ value:7, data:'D' })
        heap.insert({ value:5, data:'E' })
        heap.insert({ value:9, data:'F' })
        heap.insert({ value:4, data:'G' })


        heap.decreaseItem('E', 3) 

        let notEmpty = true
        do {
            try {
                const item = heap.extractMin().data
                helper.push(item)
            } catch(ex) {
                notEmpty = false
            }
        } while(notEmpty)

        expect(helper).toEqual([ 'C', 'B', 'E', 'G', 'D', 'F', 'A' ])

    })

    test('item not in queue', () => {
        const heap = new PriorityQueue<string>()

        heap.insert({ value:10, data:'A' })
        heap.insert({ value:2, data:'B' })
        heap.insert({ value:9, data:'F' })
        heap.insert({ value:4, data:'G' })


        expect(() =>heap.decreaseItem('E', 3)).toThrow('item not in queue')

    })    
})