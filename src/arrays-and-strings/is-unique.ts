import { stringToCharArray } from './string-utils'

export function isUnique(str: string) {
    const charArray = stringToCharArray(str)
    // skipping pigeon hole test for length and comparing to charset...let's get to biz
    const charHash: {[key: string]: number} = {} // for a constant charset i can use array of bytes or bits instead...for simplicty using a hash
    let allUnique = true
    
    for(const char of charArray) {
        if(char in charHash) {
            allUnique = false
            break
        }
        charHash[char] = 1
    }

    return allUnique
}


