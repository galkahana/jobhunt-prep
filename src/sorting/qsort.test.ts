import { describe, expect, test } from '@jest/globals'
import { qsort } from './qsort'

describe('test plain cases', () => {
    test('sorted remaines sorted', () => {
        expect(qsort([ 1, 3, 4, 5, 7 ])).toEqual([ 1, 3, 4, 5, 7 ])
    })    

    test('unsorted becomes sorted', () => {
        const arr = [ 5, 4, 3, 1, 7 ]
        qsort(arr)

        expect(arr).toEqual([ 1, 3, 4, 5, 7 ])
    })    
    test('index start and end are properly sorted', () => {
        expect(qsort([ 5, 2, 3 ])).toEqual([ 2, 3, 5 ])
    })    
})


describe('test error ranges', () => {
    test('incorrect ranges', () => {
        expect(() => qsort([ 1, 3, 4, 5, 7 ], -1)).toThrow(/range/)

        expect(() => qsort([ 1, 3, 4, 5, 7 ], 0, 9)).toThrow(/range/)

    })    
})