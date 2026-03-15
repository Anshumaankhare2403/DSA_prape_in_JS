class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}


class tree {
    constructor() {
        this.root = null;
    }

    Insertion(data) {
        const NewNode = new Node(data);
        if (this.root === null) {
            this.root = NewNode;
            return;
        }

        let current = this.root;
        while (current !== null) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = NewNode;
                    return;
                }
                current = current.left;

            }
            else {
                if (current.right === null) {
                    current.right = NewNode;
                    return;
                }
                current = current.right;
            }

        }
    }

      LCA(node, n1, n2) {
        if (node === null) return null;

        if (node.data > n1 && node.data > n2) {
            return this.LCA(node.left, n1, n2);
        }

        if (node.data < n1 && node.data < n2) {
            return this.LCA(node.right, n1, n2);
        }

        return node;
    }

    inorder(node){
            if (!node) return null;
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);

        };

    
        
    }



let dt = new tree();
dt.Insertion(10);
dt.Insertion(2);
dt.Insertion(3);
dt.Insertion(30);
dt.Insertion(4);
dt.inorder();
let result = dt.LCA(dt.root,2,30);
console.log(result.data);