import { describe, test, expect } from '@jest/globals'
import { fixedCharAt, stringToCharArray } from './string-utils'

describe('fixedCharAt', () => {
    test('out of range return empty', () => {
        expect(fixedCharAt('abc', -1)).toEqual([ '', 0 ])

        expect(fixedCharAt('abc', 3)).toEqual([ '', 0 ])

    })

    test('right char regular', () => {
        expect(fixedCharAt('abc', 1)).toEqual([ 'b', 1 ])

        expect(fixedCharAt('abc', 2)).toEqual([ 'c', 1 ])

    })

    test('right char in string with surrogate pairs', () => {
        expect(fixedCharAt('ab😀c', 1)).toEqual([ 'b', 1 ])

        expect(fixedCharAt('ab😀c', 2)).toEqual([ '😀', 2 ])

    })


})

describe('stringToCharArray', () => {
    test('empty returns empty', () => {
        expect(stringToCharArray('')).toEqual([])
    })

    test('return correctly with regular chars', () => {
        expect(stringToCharArray('abc')).toEqual([ 'a', 'b', 'c' ])
    })


    test('return correctly with surrogate pairs', () => {
        expect(stringToCharArray('ab😀c😀a')).toEqual([ 'a', 'b', '😀', 'c', '😀', 'a' ])
    })

})