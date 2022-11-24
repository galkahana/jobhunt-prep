type PriorityQueueNode<T> = {
    value: number,
    data: T
}

export class PriorityQueue<T> {
    private data: PriorityQueueNode<T>[] = []

    isEmpty() {
        return this.data.length === 0
    }

    min() {
        if(this.data.length === 0)
            throw new Error('heap is empty, no min')

        return this.data[0]
    }


    insert(node: PriorityQueueNode<T>) {
        this.data.push(node)
        this.swapToTop(this.data.length-1)
    }

    private decreaseIndex(index: number, value: number) {
        this.data[index].value = value
        this.swapToTop(index)
    }

    decreaseItem(item: T, value: number) {
        const index = this.data.findIndex((x) => x.data === item)
        if(index == -1)
            throw new Error('item not in queue')
        this.decreaseIndex(index, value)
    }


    extractMin() {
        if(this.data.length === 0)
            throw new Error('heap is empty, no min')

        if(this.data.length === 1) {
            return this.data.pop() as PriorityQueueNode<T> // pop is truly annoying
        }

        const min = this.data[0]
        this.data[0] = this.data.pop() as PriorityQueueNode<T> // at this point (given length > 1) pop will provide a relevant number
        this.minHeapify(0)
        return min
    }

    private swapToTop(index: number) {
        while(index != 0 && this.data[parent(index)].value > this.data[index].value) {
            this.swap(parent(index), index)
            index = parent(index)
        }
    }

    private minHeapify(index: number) {
        const l = left(index)
        const r = right(index)
        let smallest = index

        if(l < this.data.length && this.data[l].value < this.data[index].value)
            smallest = l

        if(r < this.data.length && this.data[r].value < this.data[smallest].value)
            smallest = r

        if(smallest != index) {
            this.swap(smallest, index)
            this.minHeapify(smallest)
        }
    }

    private swap(i:number, j:number) {
        const tmp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = tmp
    }
}


function parent(i: number) {
    return Math.floor((i-1)/2)
}

function left(i: number) {
    return 2*i+1
}
function right(i: number) {
    return 2*i+2
}


