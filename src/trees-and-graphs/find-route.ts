import { Queue } from '../structs/queue'

type Edge = {
    to: GraphNode
}

type GraphNode = {
    vertex: string
    neighbors: Edge[]
}

type Graph = {
    vertices: Record<string, GraphNode>
}


export function buildGraph(vertices: string[], edges: {from:string, to:string}[]) {
    const graph: Graph = { vertices:{} }
    for(const vertex of vertices) {
        graph.vertices[vertex] = { vertex, neighbors:[] }
    }
    for(const edge of edges) {
        graph.vertices[edge.from].neighbors.push({ to:graph.vertices[edge.to] })
    }

    return graph
}

export function hasRoute(graph: Graph, source: string, target: string): boolean {
    if(source === target)
        return true
    if(!graph.vertices[source] || !graph.vertices[target])
        return false

    const sourceNode = graph.vertices[source]
    const visitQueue = new Queue<GraphNode>()
    const visitedSet = new Set<string>()

    visitQueue.enqueue(sourceNode)

    let visitedNode: GraphNode | undefined
    while(visitedNode = visitQueue.dequeue()) {
        if(!visitedSet.has(visitedNode.vertex)) {
            visitedSet.add(visitedNode.vertex)
            if(visitedNode.vertex === target)
                return true
    
            for(const neighbor of visitedNode.neighbors) {
                visitQueue.enqueue(neighbor.to)
            }
        }
    }
    
    return false
}