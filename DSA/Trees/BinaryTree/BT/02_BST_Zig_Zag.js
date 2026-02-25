class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

class ZigZag {
    constructor() {
        this.root = null;
    }

    insertion(data) {
        let nn = new node(data);
        if (this.root === null) {
            this.root = nn;
            return;
        }

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

    // ZigZagTraver() {
    //     if (!this.root) return [];
    //     let result = [];
    //     let queue = [this.root];
    //     let leftToRight = true;
    //     while (queue.length > 0) {

    //         let levelSize = queue.length;
    //         let level = [];

    //         for (let i = 0; i < levelSize; i++) {

    //             let current = queue.shift();

    //             if (leftToRight) {
    //                 level.push(current.data);
    //             } else {
    //                 level.unshift(current.data);
    //             }

    //             if (current.left) queue.push(current.left);
    //             if (current.right) queue.push(current.right);
    //         }
    //         result.push(level);

    //         leftToRight = !leftToRight;  // flip direction
    //     }

    //     return result;

    // }
    levelordertraversal(node = this.root){
        if(!node) return;
        let queue = [];
        queue.push(this.root);
        while(queue.length){

            let current = queue.shift();
            console.log(`level [${queue.length}]`,current.data);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
        
    }

    



}

let zig = new ZigZag();
zig.insertion(10);
zig.insertion(5);
zig.insertion(3);
zig.insertion(7);
zig.insertion(30);
zig.insertion(20);
zig.insertion(70);

// console.log(zig.ZigZagTraver());

console.log("Level order ");
zig.levelordertraversal();