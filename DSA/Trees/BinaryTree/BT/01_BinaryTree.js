class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const nn = new node(data);
        if (this.root === null) {
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
                }else{
                    if(current.right===null){
                        current.right = nn;
                        return;
                    }
                    current= current.right;
                }
            }
        }
    }

    inorder(node = this.root){
        if(!node) return;
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);

    }
    postorder(node=this.root){
        if(!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
    preorder(node = this.root){
        if(!node) return;
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    leveorder(){
        if(!this.root) return;
        let qu = [];
        qu.push(this.root);
        let text = "";
        while(qu.length>0){
            let currentQue=qu.shift();
            console.log(text+=currentQue.data);
            if(currentQue.left) qu.push(currentQue.left);
            if(currentQue.right) qu.push(currentQue.right);

        }

    }
}

const T = new Tree();
T.insert(10);
T.insert(30);
T.insert(20);
T.insert(70);

T.inorder();
console.log("PostOrder:-");
T.postorder();
console.log("PreOrder:-");
T.preorder();
console.log("Level by level order Traversal ");
T.leveorder();