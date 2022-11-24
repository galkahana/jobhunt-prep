import { describe, test, expect } from '@jest/globals'
import { flipBit } from './flip-bit'


describe('test flipbit', () => {
    test('example case works', () => {
        expect(flipBit(0b11011101111)).toBe(8)
    })

    test('no 0s', () => {
        expect(flipBit(0b1111)).toBe(4)
    })

    test('only 0s', () => {
        expect(flipBit(0b0000)).toBe(1)
    })

    test('multiple 0s in between', () => {
        expect(flipBit(0b110111001111)).toBe(6)
    })


})