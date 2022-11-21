export function mergesort(numbers: number[], left = 0, right = numbers.length-1) {
    if (left < 0 || right >= numbers.length)
        throw Error('sort range out of range, please provide valid range for input numbers array (left >=0, right < numbers.length)')

    return _mergesort(numbers, new Array<number>(numbers.length), left, right)
}

function _mergesort(numbers: number[], helper: number[], left: number, right: number) {
    if(left < right) {
        const middle = Math.floor((left+right)/2)
        _mergesort(numbers, helper, left, middle)
        _mergesort(numbers, helper, middle+1, right)
        merge(numbers, helper, left, middle, right)
    }
    return numbers
}

function merge(numbers: number[], helper: number[], left: number, middle: number, right: number) {
    for(let i = left; i<=right; ++i)
        helper[i] = numbers[i]

    let helperLeft = left
    let helperRight = middle + 1
    let current = left

    // copy till either of the parts are consumed
    while(helperLeft <= middle && helperRight <= right) {
        if(helper[helperLeft] <= helper[helperRight]) {
            numbers[current] = helper[helperLeft]
            ++helperLeft
        }
        else {
            numbers[current] = helper[helperRight]
            ++helperRight
        }
        ++current
    }

    // if there's still of the left part copy till end
    while(helperLeft<=middle) {
        numbers[current] = helper[helperLeft]
        ++current
        ++helperLeft
    }

    // no need for copying the remaining of the right part...it's already there
}