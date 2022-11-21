export function qsort(numbers: number[], left = 0, right = numbers.length-1) {
    if (left < 0 || right >= numbers.length)
        throw new Error('sort range out of range, please provide valid range for input numbers array (left >=0, right < numbers.length)')

    return _qsort(numbers, left, right)
}


function _qsort(numbers: number[], left: number, right: number) {
    const index: number = partition(numbers, left, right)
    if (left < index - 1) { // sort left half
        _qsort(numbers, left, index -1)
    }
    if (index < right) { // sort right half
        _qsort(numbers, index, right)
    }

    return numbers
}

function partition(numbers: number[], left: number, right: number) {
    const pivot = numbers[Math.floor((left + right)/2)]

    while(left<=right) {
        // find two numbers that shouldn't be where they are
        while(numbers[left] < pivot) ++left
        while(numbers[right] > pivot) --right

        // if didn't complete the array swap between them and move to the next
        if(left <= right) {
            // swap, so now those numbers are good with respect to the pivot
            const tmp = numbers[left]
            numbers[left] = numbers[right]
            numbers[right] = tmp

            // move past them to the next range
            ++left
            --right
        }
    }
    return left
}


// TODO: why is this nlogn? even if always half? why worst is n?