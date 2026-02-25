class Node {
    constructor(data){
        this.data =data;
        this.left = null;
        this.right=null;
    }

}


class tree{
    constructor(){
        this.root = null;
    }

    Insertion(data){
        const NewNode = new Node(data);
        if(this.root === null){
            this.root = NewNode;
            return ;
        }

        let current  = this.root;
        while(current!==null){
            if(data<current.data){
                if(current.left===null){
                    current.left = NewNode;
                    return;
                }
                current=current.left;

            }
            else{
                if(current.right===null){
                    current.right = NewNode;
                    return;
                }
                current = current.right;
            }

        }
    }

    Trave(node = this.root){
        if(!node) return;
        console.log("inorder")
        this.Trave(node.left);
        console.log(node.data);
        this.Trave(node.right);
        console.log("post")
        this.Trave(node.left);
        this.Trave(node.right);
        console.log(node.data);
    }
}


let dt = new tree();
dt.Insertion(10);
dt.Insertion(2);
dt.Insertion(3);
dt.Insertion(30);
dt.Insertion(4);

dt.Trave();