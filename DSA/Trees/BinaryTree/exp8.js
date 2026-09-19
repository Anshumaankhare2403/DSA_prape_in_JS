class CustomerNode {
    constructor(id, name, purchaseCapacity) {
        this.id = id;
        this.name = name;
        this.purchaseCapacity = purchaseCapacity;
        this.left = null;
        this.right = null;
    }
}


class CustomerBST {
    constructor() {
        this.root = null;
    }

    insert(id, name, purchaseCapacity) {
        const newNode = new CustomerNode(id, name, purchaseCapacity);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (purchaseCapacity < current.purchaseCapacity) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    findMin() {
        if (!this.root) return null;

        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current; 
    }

    findMax() {
        if (!this.root) return null;

        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current; 
    }
}



const bst = new CustomerBST();


bst.insert(101, "Rahul", 5000);
bst.insert(102, "Priya", 8000);
bst.insert(103, "Aman", 3000);
bst.insert(104, "Sneha", 12000);
bst.insert(105, "Karan", 6000);

const minCustomer = bst.findMin();
console.log("Customer with Minimum Purchase Capacity:");
console.log(minCustomer);

const maxCustomer = bst.findMax();
console.log("Customer with Maximum Purchase Capacity:");
console.log(maxCustomer);
