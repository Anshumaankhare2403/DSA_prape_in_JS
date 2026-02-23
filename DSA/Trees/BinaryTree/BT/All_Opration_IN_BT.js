class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AllOpration_in_BT {
    constructor() {
        this.root = null;
    }

    Insertion(data) {
        const nn = new node(data);
        if (!this.root) {
            this.root = nn;
            return;
        }
        else {
            let current = this.root;
            while (current !== null) {
                if (data < current.data) {
                    if (current.left === null) {
                        current.left = nn;
                        return;
                    }
                    current = current.left;
                }
                else {
                    if (current.right === null) {
                        current.right = nn;
                        return;

                    }
                    current = current.right;
                }
            }
        }
    }
    //this a follows Recursion method 
    InOrderTraversal(node = this.root) {
        if (!node) return;
        this.InOrderTraversal(node.left);
        console.log(node.data);
        this.InOrderTraversal(node.right);
    }
    //
    InOrderTraversalSecondMethod() {
        let Stack = [];
        let current = this.root;
        while (current !== null || Stack.length>0) {
            while(current!==null){
                Stack.push(current);
                current = current.left;
            }
            current = Stack.pop();
            console.log(current.data);

            current = current.right;

        }


    }

    PostOrderTraversal(node = this.root) {
        if (!node) return;
        this.PostOrderTraversal(node.left);
        this.PostOrderTraversal(node.right);
        console.log(node.data);
    }

    PostOrderTraversalSecondMethod(){
        let Stack = [];
        let current = this.root;
        while (current !== null || Stack.length>0) {
            while(current!==null){
                Stack.push(current);
                current = current.left;
            }
            current = Stack.pop();
            
            if(current.right===null){
                current = current.right;
            }
            console.log(current.data);

        }
    }
    PreOrderTraversal(node = this.root) {
        if (!node) return;
        console.log(node.data);
        this.PreOrderTraversal(node.left);
        this.PreOrderTraversal(node.right);
    }

}

const All_BT = new AllOpration_in_BT();
All_BT.Insertion(50);
All_BT.Insertion(20);
All_BT.Insertion(40);
All_BT.Insertion(80);
All_BT.Insertion(60);

console.log("IN ORDER TRAVERSAL");
All_BT.InOrderTraversal();

console.log("IN ORDER TRAVERSAL SECOND WAY TO DO ");
All_BT.InOrderTraversalSecondMethod();

console.log("POST ORDER TRAVERSAL");
All_BT.PostOrderTraversal();

console.log("POST ORDER TRAVERSAL SECOND WAY TO DO ");
All_BT.PostOrderTraversalSecondMethod();
console.log("PRE ORDER TRAVERSAL");
All_BT.PreOrderTraversal();
