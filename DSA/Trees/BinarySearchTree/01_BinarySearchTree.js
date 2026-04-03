function node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function BT(){
    this.root= null;

    this.Insertion= function(data) {
        const nn = new node(data)
        if(this.root===null) {
            this.root = nn;
            return;
        }
        let q = [this.root];
        while(q.length>0){
            let current = q.shift();
            if(current.left===null){
                q.push(current.left);
                current.left = nn;
            }
            if(current.right===null){
                q.push(current.right);
                current.right = nn;
            }
        }
           
    }

}



// function BST(){

// }



