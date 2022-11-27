import { expect, describe, test } from '@jest/globals'
import { listOfDepths, LinkedList, TreeNode } from './list-of-depths'

function valuesInList<T>(list: LinkedList<TreeNode<T>>): T[] {
    const result: T[] = []
    let item = list.root
    while(item) {
        result.push(item.value.value)
        item = item.next
    }
    return result
}

describe('test list of depths', () =>{
    test('null case', () => {
        expect(listOfDepths({})).toEqual([])
    })

    test('simple tree', () => {
        const tree = {
            root: {
                value: 5,
                left: {
                    value: 3
                },
                right: {
                    value: 7
                }

            }
        }

        const depths = listOfDepths<number>(tree)

        expect(depths.length).toEqual(2)
        expect(valuesInList(depths[0])).toEqual([ 5 ])
        expect(valuesInList(depths[1])).toEqual([ 3, 7 ])
    })

    test('bigger tree', () => {
        const tree = {
            root: {
                value: 5,
                left: {
                    value: 3,
                    left: {
                        value: -1,
                        left: {
                            value: -2
                        }
                    }
                },
                right: {
                    value: 7,
                    left: {
                        value: 6
                    },
                    right: {
                        value: 90,
                        left: {
                            value: 30
                        },
                        right: {
                            value: 100,
                            right: {
                                value: 102
                            }
                        }
                    }
                }

            }
        }

        const depths = listOfDepths<number>(tree)

        expect(depths.length).toEqual(5)
        expect(valuesInList(depths[0])).toEqual([ 5 ])
        expect(valuesInList(depths[1])).toEqual([ 3, 7 ])
        expect(valuesInList(depths[2])).toEqual([ -1, 6, 90 ])
        expect(valuesInList(depths[3])).toEqual([ -2, 30, 100 ])
        expect(valuesInList(depths[4])).toEqual([ 102 ])
    })
})