import { describe, expect, test } from '@jest/globals'
import { TreeNode, validateBST } from './validate-bst'

function createUniqueBSTTree(): TreeNode<number> {
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

function createNonBSTTree1(): TreeNode<number> {
    return {
        value: 5,
        left: {
            value:2, 
            left: {
                value: 3
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

function createNonBSTTree2(): TreeNode<number> {
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
            value: 4,
            left: {
                value: 6
            }
        }
    }
}


describe('validate-bst test', () => {

    test('null cases', () =>{
        expect(validateBST({ value:6 })).toEqual(true)
        expect(validateBST(undefined)).toEqual(true)
    })

    test('valid invalid bst', () => {
        expect(validateBST({ value:6, left:{ value:4 }, right:{ value:7 } })).toEqual(true)
        expect(validateBST({ value:6, left:{ value:4 }, right:{ value:5 } })).toEqual(false)

        expect(validateBST(createUniqueBSTTree())).toEqual(true)
        expect(validateBST(createNonBSTTree1())).toEqual(false)
        expect(validateBST(createNonBSTTree2())).toEqual(false)
    })
})