class Graph {
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

    bfs(start) {
        let visited = new Set();
        let queue = [start];

        console.log("BFS Traversal:");

        while (queue.length > 0) {
            let node = queue.shift();

            if (!visited.has(node)) {
                console.log(node);
                visited.add(node);

                this.adjList.get(node).forEach(neighbour => {
                    if (!visited.has(neighbour)) {
                        queue.push(neighbour);
                    }
                });
            }
        }
    }
}

let g1 = new Graph();
["A", "B", "C", "D", "E"].forEach(v => g1.addVertex(v));
g1.addEdge("A", "B");
g1.addEdge("A", "C");
g1.addEdge("B", "D");
g1.addEdge("C", "E");

g1.bfs("A");
