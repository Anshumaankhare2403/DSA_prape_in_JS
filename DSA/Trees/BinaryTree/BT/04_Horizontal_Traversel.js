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
    searching(data){
          if(this.root===null){
            return;
          }
          let current = this.root;

          while(current!==null){
            if(current.data===data){
                console.log("data found",data)
                return true;
            }
            else if(current.data>data){
                current = current.left;
            }
            else{
                current = current.right;
            }
          }

          return false ;
    }
    descanding(node = this.root){
        if(!node)return;

        this.descanding(node.right);
        console.log(node.data);
        this.descanding(node.left);

    }

    leaf(node = this.root){
        if(!node){
            return; 
        }
        if(node.left=== null && node.right === null){
           console.log(node.data);
        }
        this.leaf(node.left);
        this.leaf(node.right);
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
console.log("Searching  ");
console.log(TR.searching(3));
console.log("descanding order ");
TR.descanding();

console.log("leaf");

TR.leaf();