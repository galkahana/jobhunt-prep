import { describe, test, expect } from '@jest/globals'
import { firstCommonAncestor, TreeNode } from './first-common-ancestor'

function generateSampleTree() {
    const tree = {
        value: 5,
        left: {
            value: 3,
            left: {
                value: -1
            },
            right: {
                value: -2
            }
        },
        right: {
            value: 7,
            left: {
                value: 6
            },
            right: {
                value: -90,
                left: {
                    value: 30
                },
                right: {
                    value: 100
                }
            }
        }
    }

    return tree
}

function findNodeInTree<T>(tree: TreeNode<T> | undefined, value: T): TreeNode<T> | null {
    if(!tree)
        return null

    if(tree.value === value)
        return tree

    return findNodeInTree(tree.left, value) || findNodeInTree(tree.right, value)
}

describe('firstCommonAncestor test', () => {

    test('null cases', () => {
        expect(firstCommonAncestor(undefined, { value:6 }, { value:7 })).toEqual(null)
    })

    test('find first common ancestor', () => {
        const sampleTree = generateSampleTree()

        expect(firstCommonAncestor(sampleTree, sampleTree.left, sampleTree.right)).toEqual(sampleTree)
        expect(firstCommonAncestor(sampleTree, findNodeInTree(sampleTree, -90) as TreeNode<number>, findNodeInTree(sampleTree, 6) as TreeNode<number>)?.value).toEqual(7)
        expect(firstCommonAncestor(sampleTree, findNodeInTree(sampleTree, -2) as TreeNode<number>, findNodeInTree(sampleTree, 7) as TreeNode<number>)?.value).toEqual(5)
        expect(firstCommonAncestor(sampleTree, findNodeInTree(sampleTree, -2) as TreeNode<number>, findNodeInTree(sampleTree, -1) as TreeNode<number>)?.value).toEqual(3)
        expect(firstCommonAncestor(sampleTree, findNodeInTree(sampleTree, 6) as TreeNode<number>, findNodeInTree(sampleTree, 100) as TreeNode<number>)?.value).toEqual(7)
        expect(firstCommonAncestor(sampleTree, findNodeInTree(sampleTree, 7) as TreeNode<number>, findNodeInTree(sampleTree, 30) as TreeNode<number>)?.value).toEqual(7)
        expect(firstCommonAncestor(sampleTree, findNodeInTree(sampleTree, 7) as TreeNode<number>, findNodeInTree(sampleTree, 5) as TreeNode<number>)?.value).toEqual(5)
        expect(firstCommonAncestor(sampleTree, findNodeInTree(sampleTree, 7) as TreeNode<number>, { value: 9 })).toEqual(null)

    })
})