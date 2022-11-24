import { describe, test, expect } from '@jest/globals'
import { buildGraph, dijsktra } from './dijkstra'

function path(to: string, from: string, prev: Record<string, string>) {
    const track: string[] = []
    let current: string = to

    while(current) {
        track.push(current)
        current = prev[current]
    }

    return track.reverse()
}

describe('disktra algo', () => {
    test('correctly finds min distances in a graph', () => {
        const graph = buildGraph([ 'a', 'b', 'c', 'd', 'e', 'f' ], [
            { from: 'a', to: 'b', weight:7 },
            { from: 'b', to: 'd', weight:9 },
            { from: 'd', to: 'f', weight:1 },
            { from: 'b', to: 'c', weight:2 },
            { from: 'e', to: 'd', weight:4 },
            { from: 'a', to: 'c', weight:12 },
            { from: 'c', to: 'e', weight:10 },
            { from: 'e', to: 'f', weight:5 },
        ])

        const { dist, prev } = dijsktra(graph, 'a')
        expect(path('f', 'a', prev)).toEqual([ 'a', 'b', 'd', 'f' ])
        expect(dist['f']).toEqual(17)

        expect(path('e', 'a', prev)).toEqual([ 'a', 'b', 'c', 'e' ])
        expect(dist['e']).toEqual(19)

    })

})