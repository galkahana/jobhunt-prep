export function isUnique(str: string) {
    // skipping pigeon hole test for length and comparing to charset...let's get to biz
    const charHash: {[key: string]: number} = {} // for a constant charset i can use array of bytes or bits instead...for simplicty using a hash
    let index = 0
    let allUnique = true

    while(index<str.length) {
        const [ nextChar, length ] = fixedCharAt(str, index)
        if(nextChar in charHash) {
            allUnique = false
            break
        }
        charHash[nextChar] = 1
        index+=length
    }

    return allUnique
}


// this implementation, which we'll use make sure we get a full "char"
function fixedCharAt(str: string, idx: number): [string, number] {
    if (idx >= str.length || idx < 0) {
        return [ '', 0 ]
    }
  
    let ret = str.charAt(idx)
  
    if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
        // Go one further, since one of the "characters" is part of a surrogate pair
        ret += str.charAt(idx + 1)
        return [ ret, 2 ]
    }
    return [ ret, 1 ]
}