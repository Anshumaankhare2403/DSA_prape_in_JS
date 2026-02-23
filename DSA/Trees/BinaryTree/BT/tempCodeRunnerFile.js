class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class verticalOrderTraversal {
    constructor() {
        this.root = null;
    }

    Insertsion(data) {
        const nn = new Node(data);
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
    // HD(hd){
    //     if(hd<0) return 0 ;
    //     if(hd>0) return hd+1;
    //     if(hd<0) return hd-2;
    // }

    VerticalTraversal() {
        if (!this.root) return;
        let qu = [[this.root, 0]];
        let map = new Map();

        while (qu.length > 0) {
            let [node, hd] = qu.shift()
            if (!map.has(hd)) {
                map.set(hd, []);
            }
            map.get(hd).push(node.data);

            if (node.left) qu.push([node.left, hd - 1]);
            if (node.right) qu.push([node.right, hd + 1]);
        }
        let sortKey = [...map.keys()].sort((a, b) => a - b);
        for (let key of sortKey) {
            console.log(`HD[${key}] ->`, map.get(key).join(" "));
        }
    }
    VerticalTraversalSecond(){
        if(!this.root) return;
        let qu = [[0,this.root]] ;
        let arr = []
        while(qu.length>0){
            let [hd,node]= qu.shift();
            arr.push([hd,node.data]);
            if(node.left) qu.push([hd-1,node.left]);
            if(node.right) qu.push([hd+1,node.right]);
        }

        // arr.sort((a,b)=>a[0]-b[0]);
        console.log(arr);
    }
}

const vot = new verticalOrderTraversal();
vot.Insertsion(10);
vot.Insertsion(20);
vot.Insertsion(4);
vot.Insertsion(5);
vot.Insertsion(29);

console.log("Vertical Order Traversal")
vot.VerticalTraversal();
console.log("Vertical Order Traversal Second")
vot.VerticalTraversalSecond();