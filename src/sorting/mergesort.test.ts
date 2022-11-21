import { describe, expect, test } from '@jest/globals'
import { mergesort } from './mergesort'

describe('test plain cases', () => {
    test('sorted remaines sorted', () => {
        expect(mergesort([ 1, 3, 4, 5, 7 ])).toEqual([ 1, 3, 4, 5, 7 ])
    })    

    test('unsorted becomes sorted', () => {
        expect(mergesort([ 5, 4, 3, 1, 7 ])).toEqual([ 1, 3, 4, 5, 7 ])
    })    
    test('index start and end are properly sorted', () => {
        expect(mergesort([ 5, 2, 3 ])).toEqual([ 2, 3, 5 ])
    })    
})


describe('test error ranges', () => {
    test('incorrect ranges', () => {
        expect(() => mergesort([ 1, 3, 4, 5, 7 ], -1)).toThrow(/range/)

        expect(() => mergesort([ 1, 3, 4, 5, 7 ], 0, 9)).toThrow(/range/)

    })    
})

describe('partial sort', () => {
    test('sorts only requested range', () => {
        expect(mergesort([ 5, 4, 3, 1, 7 ], 1, 4)).toEqual([ 5, 1, 3, 4, 7 ])
    })    
})