// this implementation, which we'll use make sure we get a full "char"
export function fixedCharAt(str: string, idx: number): [string, number] {
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


export function stringToCharArray(str: string) {
    const result = []
    let index = 0

    while(index < str.length) {
        const [ char, length ] = fixedCharAt(str, index)
        result.push(char)
        index+=length
    }
    

    return result
}
