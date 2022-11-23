import { describe, test, expect } from '@jest/globals'
import { ListNode, getKthToLast } from './linked-lists'

function buildListFromArray<T>(arr: T[]) {
    if(arr.length == 0)
        throw new Error('bring me something valid')
    
    const list: ListNode<T> = { value: arr[0] }
    let current = list

    for(let i=1;i<arr.length;++i) {
        current.next = { value: arr[i] }
        current = current.next
    }

    return list
}

describe('getKthToLast tests', () => {
    test('good ones', () => {
        expect(getKthToLast(buildListFromArray<number>([ 1, 2, 3 ]), 1)).toEqual(2)

        expect(getKthToLast(buildListFromArray<number>([ 1, 2, 3 ]), 0)).toEqual(3)

        expect(getKthToLast(buildListFromArray<number>([ 1, 2, 3, 5, 6, 7, 8 ]), 3)).toEqual(5)

    })

    test('out of range', () => {
        expect(getKthToLast(buildListFromArray<number>([ 1, 2, 3 ]), 3)).toBe(undefined)
        expect(getKthToLast(buildListFromArray<number>([ 1, 2, 3 ]), 4)).toBe(undefined)

    })
})