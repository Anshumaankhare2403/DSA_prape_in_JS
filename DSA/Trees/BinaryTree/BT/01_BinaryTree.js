class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// now next should be how to implement insertion in tree

class BT {
    constructor() {
        this.root = null;
    }

    insertion(data) {
        const nn = new node(data);

        if (this.root === null) {
            this.root = nn;
            return;  // VERY IMPORTANT
        }

        let current = this.root;

        while (current !== null) {

            if (data < current.data) {

                if (current.left === null) {
                    current.left = nn;
                    return;
                }

                current = current.left;

            } else {

                if (current.right === null) {
                    current.right = nn;
                    return;
                }

                current = current.right;
            }
        }
    }

    inorder(node = this.root) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}


const dt1 = new BT();
dt1.insertion(19);
dt1.insertion(11);
dt1.insertion(12);
dt1.insertion(14);
dt1.insertion(15);

dt1.inorder();
