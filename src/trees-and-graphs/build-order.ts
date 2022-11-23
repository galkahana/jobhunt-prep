import { Queue } from '../structs/queue'

type ProjectNode  = {
    name: string
    dependents: ProjectNode[]
    unbuiltDependencies: number
    built: boolean
}

export function getBuildOrder(projects: string[], dependencies: [string, string][]) : string[] {
    const result: string[] = []
    const buildQueue: Queue<ProjectNode> = new Queue()
    const projectsNodes: Record<string, ProjectNode> = {}

    // prep!
    for(const project of projects) {
        projectsNodes[project] = { name: project, dependents:[], unbuiltDependencies:0, built:false }
    }
    for(const [ dependency, dependent ] of dependencies) {
        const dependencyNode = projectsNodes[dependent]
        ++dependencyNode.unbuiltDependencies
        projectsNodes[dependency].dependents.push(dependencyNode)
    }

    // init build queue
    for(const [ , projectNode ] of Object.entries(projectsNodes)) {
        if(projectNode.unbuiltDependencies === 0)
            buildQueue.enqeue(projectNode)
    }

    let nextProject: ProjectNode | undefined
    while(nextProject = buildQueue.dequeue()) {
        if(nextProject.unbuiltDependencies === 0 && !nextProject.built) {
            result.push(nextProject.name)
            nextProject.built = true
            for(const dependentProject of nextProject.dependents) {
                --dependentProject.unbuiltDependencies
                buildQueue.enqeue(dependentProject)
            }
        }
    }

    if(result.length !== projects.length)
        throw new Error('cycle found')

    return result
}