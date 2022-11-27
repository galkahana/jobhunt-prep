type Edge = {
    to: GraphNode
    weight: number
}

export type GraphNode = {
    vertex: string
    neighbors: Edge[]
}

type Graph = {
    vertices: Record<string, GraphNode>
}

// build weighted or unweighted graph. default 1 is used for unweighted graph
export function buildGraph(vertices: string[], edges: {from:string, to:string, weight?: number}[]) {
    const graph: Graph = { vertices:{} }
    for(const vertex of vertices) {
        graph.vertices[vertex] = { vertex, neighbors:[] }
    }
    for(const edge of edges) {
        graph.vertices[edge.from].neighbors.push({ to:graph.vertices[edge.to], weight:edge.weight || 1 })
    }

    return graph
}
