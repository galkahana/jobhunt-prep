import { PriorityQueue } from '../structs/priority-queue'

type Edge = {
    to: GraphNode
    weight: number
}

type GraphNode = {
    vertex: string
    neighbors: Edge[]
}

type Graph = {
    vertices: Record<string, GraphNode>
}


export function buildGraph(vertices: string[], edges: {from:string, to:string, weight: number}[]) {
    const graph: Graph = { vertices:{} }
    for(const vertex of vertices) {
        graph.vertices[vertex] = { vertex, neighbors:[] }
    }
    for(const edge of edges) {
        graph.vertices[edge.from].neighbors.push({ to:graph.vertices[edge.to], weight:edge.weight })
    }

    return graph
}


export function dijsktra(graph: Graph, source: string) {
    const dist: Record<string, number> = {}
    const prev: Record<string, string> = {}
    const visited: Set<string> = new Set<string>()
    const queue = new PriorityQueue<GraphNode>()

    for(const [ vertex, vertexNode ] of Object.entries(graph.vertices)) {
        const distanceFromSource = vertex === source ? 0 : Number.MAX_VALUE // prior to discovery this is infinity
        dist[vertex] = distanceFromSource
        queue.insert({ value: distanceFromSource, data: vertexNode })
    }

    while(!queue.isEmpty()) {
        const visitedVertexNode = queue.extractMin()
        if(!visited.has(visitedVertexNode.data.vertex)) {
            visited.add(visitedVertexNode.data.vertex)
            const distanceToMe = dist[visitedVertexNode.data.vertex]
            for(const neighbor of visitedVertexNode.data.neighbors) {
                const alternativeWeight = distanceToMe + neighbor.weight
                if(alternativeWeight < dist[neighbor.to.vertex]) {
                    dist[neighbor.to.vertex] = alternativeWeight
                    prev[neighbor.to.vertex] = visitedVertexNode.data.vertex
                    // enqueue with new weight...which should be faster than finding the item and decreasing its value (as in queue.decreaseItem)
                    queue.insert({ value: alternativeWeight, data: neighbor.to })
                }
            }
        }        
    }
    return { dist, prev }
}
