import { describe, test, expect } from '@jest/globals'
import { BSTNode, getLowerBST } from './minimal-height'

function computeTreeHeight<T>(tree?: BSTNode<T>): number {
    if(!tree)
        return 0

    return Math.max(computeTreeHeight(tree.left), computeTreeHeight(tree.right)) + 1
}

describe('get the right height for trees', () => {
    test('the null case', () => {
        expect(computeTreeHeight(getLowerBST([]))).toEqual(0)
    })

    test('full symetric', () => {
        expect(computeTreeHeight(getLowerBST([ 1, 2, 3, 4, 5, 6, 7 ]))).toEqual(3)
    })

    test('one missing', () => {
        expect(computeTreeHeight(getLowerBST([ 1, 2, 3, 4, 5, 6 ]))).toEqual(3)
    })

})