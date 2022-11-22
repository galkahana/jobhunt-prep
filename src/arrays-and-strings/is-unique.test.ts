import { describe, test, expect } from '@jest/globals'
import { isUnique } from './is-unique'

describe('is unique', () => {
    test('empty is unique', () => {
        expect(isUnique('')).toBe(true)
    })


    test('non unique is detected', () => {
        expect(isUnique('aba')).toBe(false)
    })

    test('unique is detected', () => {
        expect(isUnique('abc')).toBe(true)
    })

    test('identify none unique with surrogate pairs', () => {
        expect(isUnique('😀AB😀')).toBe(false)
    })


    test('identify unique with surrogate pairs', () => {
        expect(isUnique('😀AB')).toBe(true)
    })
})