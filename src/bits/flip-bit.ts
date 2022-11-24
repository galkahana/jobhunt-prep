export function flipBit(num:number) {
    let prevLength = 0
    let currentLength = 0
    let result = 0

    if(num === 0)
        return 1

    while(num > 0) {
        if (num & 1) {
            ++currentLength
        } else {
            prevLength = currentLength + 1
            currentLength = 0
        }
        result = Math.max(result, prevLength + currentLength)

        num>>>=1
    }

    return result
}