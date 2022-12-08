import { Stack } from '../structs/stack'


export function sortStack(stack: Stack<number>) {
    const helperStack = new Stack<number>()
    let current: number | undefined
    let transferredElementsCount: number

    // sort on helper (per max!)
    while(current = stack.pop()) {
        transferredElementsCount = 0
        while(helperStack.top() !== undefined && helperStack.top() as number > current) {
            ++transferredElementsCount
            stack.push(helperStack.pop() as number)
        }
        helperStack.push(current)
        for(let i=0;i<transferredElementsCount;++i)
            helperStack.push(stack.pop() as number)
    }


    // move to original (to make it per min :))
    while(helperStack.top()) {
        stack.push(helperStack.pop() as number)
    }

    return stack
}