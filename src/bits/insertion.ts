

export function insertNumber(N: number, M: number, i: number, j:number) {

    const bitDarkener = (-1<<j+1) | ((1<<i) - 1)
    const NDarkened = N & bitDarkener
    const MMoved = (M<<i)

    return NDarkened | MMoved

}