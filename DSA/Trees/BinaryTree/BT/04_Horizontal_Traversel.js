class node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right =null;
    }
}

class HT{
    constructor(){
        this.root = null;

    }

    Insertion(data){
        const NewNode = new node(data);
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

    InOrderTrave(node = this.root){
        if(!node) return;
        this.InOrderTrave(node.left);
        console.log(node.data);
        this.InOrderTrave(node.right);
    }
    PostorderTrave(node=this.root){
        if(!node)return;

        this.PostorderTrave(node.left);
        this.PostorderTrave(node.right);
        console.log(node.data);
    }
    levelOrderTraversal(){
        if(this.root===null) return-1;
        let qu = [];
        qu.push(this.root);
        while(qu.length>0){
            let current = qu.shift();
            console.log(current.data);
            if(current.left) qu.push(current.left);
            if(current.right) qu.push(current.right);
        }
    }


}



let TR = new HT();

TR.Insertion(10);
TR.Insertion(2);
TR.Insertion(0);
TR.Insertion(43);

TR.InOrderTrave();
console.log("POST ORDER TRAVERSAL");
TR.PostorderTrave();
console.log("LEVEL ORDER TRAVERSAL");
TR.levelOrderTraversal();
