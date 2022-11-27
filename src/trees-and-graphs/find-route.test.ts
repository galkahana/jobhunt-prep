import { describe, test, expect } from '@jest/globals'
import { buildGraph, hasRoute } from './find-route'

function buildTestGraph() {
    return buildGraph([ 'a', 'b', 'c', 'd', 'e', 'f' ], [
        { from: 'a', to: 'b' },
        { from: 'b', to: 'd' },
        { from: 'd', to: 'f' },
        { from: 'b', to: 'c' },
        { from: 'e', to: 'd' },
        { from: 'a', to: 'c' },
        { from: 'c', to: 'e' },
        { from: 'e', to: 'f' },
        { from: 'f', to: 'c' }, // circle
    ])
}

describe('hasRoute test', () => {
    test('identify route existance where exists', () => {
        const graph = buildTestGraph()

        expect(hasRoute(graph, 'a', 'f')).toEqual(true)
        expect(hasRoute(graph, 'a', 'c')).toEqual(true)
        expect(hasRoute(graph, 'f', 'a')).toEqual(false)
        expect(hasRoute(graph, 'f', 'c')).toEqual(true)
        expect(hasRoute(graph, 'c', 'f')).toEqual(true)
        expect(hasRoute(graph, 'a', 'a')).toEqual(true)
        expect(hasRoute(graph, 'c', 'b')).toEqual(false)
    })

})