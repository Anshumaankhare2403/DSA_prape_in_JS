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
        while(q.length<0){
            let current = q.splice();
            console.log(current.data);
            if(this.left===null){
                q.push();
            }
        }
           
    }


}

// function BST(){

// }



