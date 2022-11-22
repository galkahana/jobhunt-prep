import { checkPermutation } from './check-permutation'

describe('check permutation', () => {
    test('empty are permutations', () => {
        expect(checkPermutation('', '')).toBe(true)
    })


    test('permutation of unique', () => {
        expect(checkPermutation('abc', 'cba')).toBe(true)
    })

    test('non permutation of unique', () => {
        expect(checkPermutation('abcd', 'ecba')).toBe(false)
    })

    test('non permutation of different length', () => {
        expect(checkPermutation('abc', 'abce')).toBe(false)
    })

    test('permutation of non unique', () => {
        expect(checkPermutation('babc', 'cbba')).toBe(true)
    })


    test('non permutation of non unique', () => {
        expect(checkPermutation('babbc', 'bcbaa')).toBe(false)
    })

    test('permutation with surrogate pair', () => {
        expect(checkPermutation('😀AB', 'AB😀')).toBe(true)
    })    

    test('non permutation with surrogate pair', () => {
        expect(checkPermutation('😀AC', 'AB😀')).toBe(false)
    })    

})