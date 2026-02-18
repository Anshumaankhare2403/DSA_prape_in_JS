class node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

class ZigZag{
    constructor(){
        this.root = null;
    }

    insertion(data){
        let nn = new node(data);
        if(this.root===null){
            this.root=nn;
            return;
        }

        let current  = this.root;
        while(current!==null){
            if(data<current.data){
                if(current.left===null){
                    current.left = nn;
                    return;
                }
                current = current.left;
            }
            else{
                if(current.right===null){
                    current.right = nn;
                    return;

                }
                current = current.right;
            }
        }


    }

    ZigZagTraver(node = this.root){
        
    }


}