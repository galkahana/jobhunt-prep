// todo: test for index validity

export function qsort(numbers: number[], left = 0, right = numbers.length-1) {
    const index: number = partition(numbers, left, right)
    if (left < index - 1) { // sort left half
        qsort(numbers, left, index -1)
    }
    if (index < right) { // sort right half
        qsort(numbers, index, right)
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