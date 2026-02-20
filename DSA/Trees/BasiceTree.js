class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

// Function to print the tree hierarchy
function printTree(node, level = 0) {
    console.log(" ".repeat(level * 4) + node.data);
    for (let child of node.children) {
        printTree(child, level + 1);
    }
}

// Creating Tree
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const child4 = new Node(5);

root.addChild(child1);
root.addChild(child2);

child1.addChild(child3);
child1.addChild(child4);

// Print the tree in hierarchy
printTree(root);

