import { describe, expect, test } from '@jest/globals'
import { insertNumber } from './insertion'


describe('test insertNumber', () => {
    test('test plain insertion', () => {
        expect(insertNumber(0b100000000000, 0b10011, 2, 6)).toEqual(0b100001001100)
    })
})

