export type ListNode<T> = {
    value: T
    next?: ListNode<T>
}

export function getKthToLast<T>(list: ListNode<T>, k: number) {
    
    // first, move first pointer k steps + 1 (which will later match stopping after a _exceeded_ the list)
    let a: ListNode<T> | undefined = list
    let i =0
    for(;i<=k && a;++i)
        a = a.next

    if(i<=k)
        return undefined // k index is out of range, return undefined

    let b: ListNode<T> | undefined = list
    while(a && b) {
        a = a.next
        b = b.next
    }

    return  b && b.value
}