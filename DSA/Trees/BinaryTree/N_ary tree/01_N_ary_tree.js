// Node class for N-ary Tree
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    // Add child to current node
    addChild(child) {
        this.children.push(child);
    }
}

// Create nodes
let root = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");
let nodeD = new Node("D");
let nodeE = new Node("E");
let nodeF = new Node("F");
let nodeG = new Node("G");

// Build tree
root.addChild(nodeB);
root.addChild(nodeC);
root.addChild(nodeD);

nodeB.addChild(nodeE);
nodeB.addChild(nodeF);

nodeD.addChild(nodeG);

// Display tree using DFS (Depth First Search)
function printTree(node, level = 0) {
    console.log("_".repeat(level * 4) + node.data);

    for (let child of node.children) {
        printTree(child, level + 1);
    }
}

// Call function
printTree(root);