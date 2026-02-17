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
        let result =[];
        let qu = [] ;
        qu.push(this.root);

        while(qu.length>0){
            let current = qu.shift();
            result.push(current.data);

            if(current.left) qu.push(current.left);
            if(current.right) qu.push(current.right); 
        }

        console.log(result.join(","));
    }

    heigthofthetree(node=this.root){
        if(!node)return -1;
        let hl = this.heigthofthetree(node.left);
        let hr = this.heigthofthetree(node.right);
        return 1+Math.max(hl,hr);

    }

    dimeteroftree(){
        let maxdimeter = 0;
        let heigth = (node)=>{
            if(!node) return -1;
            let lh = heigth(node.left);
            let rh = heigth(node.right);
            maxdimeter = Math.max(maxdimeter,lh+rh+2);
            return 1+Math.max(lh,rh);
        };

        heigth(this.root);

        return maxdimeter;


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
console.log("higth of the tree is ",T.heigthofthetree());
console.log("Dimeter of the tree is ",T.dimeteroftree())