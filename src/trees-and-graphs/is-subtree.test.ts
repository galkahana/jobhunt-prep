import { describe, expect, test } from '@jest/globals'
import { isSubTree, TreeNode } from './is-subtree'

function createLargeTree(): TreeNode<number> {
    return {
        value: 5,
        left: {
            value:2, 
            left: {
                value: 1
            },
            right: {
                value: 4,
                left: {
                    value:3
                }
            }
        },
        right: {
            value: 7,
            left: {
                value: 6
            }
        }
    }
}

function createLeftSubtree(): TreeNode<number> {
    return {
        value:2, 
        left: {
            value: 1
        },
        right: {
            value: 4,
            left: {
                value:3
            }
        }
    }
}

function createRightSubtree(): TreeNode<number> {
    return {
        value: 6,
    }
}


function createNonSubtree(): TreeNode<number> {
    return {
        value: 6,
        left: {
            value: 1
        }
    }
}


describe('isSubtree test', () => {
    test('null cases', () => {
        const largeTree = createLargeTree()

        expect(isSubTree(largeTree, largeTree)).toEqual(true)
        expect(isSubTree(undefined, undefined)).toEqual(true)
        expect(isSubTree(largeTree, undefined)).toEqual(true)
        expect(isSubTree(undefined, largeTree)).toEqual(false)
    })

    test('tree cases', () => {
        const largeTree = createLargeTree()
        const leftSubTree = createLeftSubtree()
        const rightSubTree = createRightSubtree()
        const nonSubTree = createNonSubtree()


        expect(isSubTree(largeTree, leftSubTree)).toEqual(true)
        expect(isSubTree(largeTree, rightSubTree)).toEqual(true)
        expect(isSubTree(leftSubTree, rightSubTree)).toEqual(false)
        expect(isSubTree(largeTree, nonSubTree)).toEqual(false)
    })
})