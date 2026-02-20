
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class ExpressionTree {

    buildTree(postfix) {
        let stack = [];

        for (let char of postfix) {

            if (/[a-zA-Z0-9]/.test(char)) {
                stack.push(new Node(char));
            } else {

                let node = new Node(char);
                node.right = stack.pop();
                node.left = stack.pop();
                stack.push(node);
            }
        }
        return stack.pop();
    }


    inorder(node) {
        if (!node) return "";
        return "(" + this.inorder(node.left) + node.value + this.inorder(node.right) + ")";
    }


    preorder(node) {
        if (!node) return "";
        return node.value + this.preorder(node.left) + this.preorder(node.right);
    }

    postorder(node) {
        if (!node) return "";
        return this.postorder(node.left) + this.postorder(node.right) + node.value;
    }
}



let expression = "AB+CD*/";
let tree = new ExpressionTree();

let root = tree.buildTree(expression);

console.log("Infix Expression (Inorder)  : " + tree.inorder(root));
console.log("Prefix Expression (Preorder) : " + tree.preorder(root));
console.log("Postfix Expression (Postorder): " + tree.postorder(root));
