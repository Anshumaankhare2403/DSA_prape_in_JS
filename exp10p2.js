class Graph2 {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    dfs(start) {
        let visited = new Set();

        const explore = (node) => {
            if (!visited.has(node)) {
                console.log(node);
                visited.add(node);

                this.adjList.get(node).forEach(neighbour => explore(neighbour));
            }
        };

        console.log("DFS Traversal:");
        explore(start);
    }
}

// Example
let g2 = new Graph2();
["A", "B", "C", "D", "E"].forEach(v => g2.addVertex(v));
g2.addEdge("A", "B");
g2.addEdge("A", "C");
g2.addEdge("B", "D");
g2.addEdge("C", "E");

g2.dfs("A");
