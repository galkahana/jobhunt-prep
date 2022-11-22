import { fixedCharAt } from './string-utils'

type charMap = Record<string, number>

export function checkPermutation(a: string, b: string) {
    const charHashA = createCharMap(a)
    const charHashB = createCharMap(b)

    return compareHashs(charHashA, charHashB)
}


function createCharMap(str: string) {
    const charHash: charMap = {} // for a constant charset i can use array of bytes or bits instead...for simplicty using a hash
    let index = 0

    while(index<str.length) {
        const [ nextChar, length ] = fixedCharAt(str, index)
        if(!(nextChar in charHash)) {
            charHash[nextChar] = 0
        }
        ++charHash[nextChar]
        index+=length
    }
    return charHash
}

function compareHashs<K extends number|string|symbol, T>(a: Record<K, T>, b: Record<K, T>) {
    if (Object.keys(a).length != Object.keys(b).length)
        return false

    for(const keyA in a) {
        if(a[keyA] != b[keyA])
            return false
    }

    return true
}