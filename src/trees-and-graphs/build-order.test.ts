import { getBuildOrder } from './build-order'
import { describe, test } from '@jest/globals'

function assertBuildOrderSatisfiesDependencies(buildOrder: string[], dependencies: [string, string][]) {
    for(const [ dependency, dependent ] of dependencies) {
        if(buildOrder.indexOf(dependency) >  buildOrder.indexOf(dependent))
            throw new Error(`dependency ${dependency} of ${dependent} not satisfied`)
    }
}

describe('find build order when available', () => {

    test('exrecise example should deliver a working build order', () =>{
        const projects: string[] = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
        const dependencies: [string, string][] = [ [ 'a', 'd' ], [ 'f', 'b' ], [ 'b', 'd' ], [ 'f', 'a' ], [ 'd', 'c' ] ]
        const buildOrder = getBuildOrder(projects, dependencies)
        assertBuildOrderSatisfiesDependencies(buildOrder,  dependencies)
    })

    test('independent projects work', () =>{
        const projects: string[] = [ 'a', 'b', 'c' ]
        const dependencies: [string, string][] = []
        const buildOrder = getBuildOrder(projects, dependencies)
        assertBuildOrderSatisfiesDependencies(buildOrder,  dependencies)
    })

    test('no projects also good', () =>{
        const projects: string[] = []
        const dependencies: [string, string][] = []
        const buildOrder = getBuildOrder(projects, dependencies)
        assertBuildOrderSatisfiesDependencies(buildOrder,  dependencies)
    })

    test('simple lines works as well', () =>{
        const projects: string[] = [ 'a', 'b', 'c', 'd' ]
        const dependencies: [string, string][] = [ [ 'a', 'b' ], [ 'b', 'c' ], [ 'c', 'd' ] ]
        const buildOrder = getBuildOrder(projects, dependencies)
        assertBuildOrderSatisfiesDependencies(buildOrder,  dependencies)
    })

})


describe('fail when theres a circle', () => {
    test('simple circle', () =>{
        const projects: string[] = [ 'a', 'b', 'c', 'd' ]
        const dependencies: [string, string][] = [ [ 'a', 'b' ], [ 'b', 'c' ], [ 'c', 'd' ], [ 'd', 'a' ] ]
        expect(()=> getBuildOrder(projects, dependencies)).toThrow(/cycle found/)
    })

    test('simple multiple cycle', () =>{
        const projects: string[] = [ 'a', 'b', 'c', 'd', 'f' ]
        const dependencies: [string, string][] = [ [ 'a', 'b' ], [ 'b', 'c' ], [ 'c', 'b' ], [ 'c', 'd' ], [ 'd', 'a' ] ]
        expect(()=> getBuildOrder(projects, dependencies)).toThrow(/cycle found/)
    })

})
