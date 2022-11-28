import { describe, expect, test } from '@jest/globals'
import { BSTNode, getSuccessor } from './successor'

function buildSampleTree() {
    const nodes: BSTNode<number>[] = [ 1, 2, 3, 4, 5, 6, 7 ].map((value)=>({ value }))

    nodes[4].left = nodes[1]
    nodes[1].parent = nodes[4]
    nodes[4].right = nodes[6]
    nodes[6].parent = nodes[4]
    nodes[6].left = nodes[5]
    nodes[5].parent = nodes[6]
    nodes[1].left = nodes[0]
    nodes[0].parent = nodes[1]
    nodes[1].right = nodes[3]
    nodes[3].parent = nodes[1]
    nodes[3].left = nodes[2]
    nodes[2].parent = nodes[3]

    return nodes
}

describe('successor test', () => {
    test('has right child return leftmost', () => {
        expect(getSuccessor(buildSampleTree()[1])?.value).toEqual(3)
        expect(getSuccessor(buildSampleTree()[4])?.value).toEqual(6)
    })

    test('no right child returns first non left parent', () => {
        expect(getSuccessor(buildSampleTree()[3])?.value).toEqual(5)
    })

    test('null cases', () => {
        expect(getSuccessor(buildSampleTree()[6])).toEqual(undefined)

        expect(getSuccessor(undefined)).toEqual(undefined)
    })

})