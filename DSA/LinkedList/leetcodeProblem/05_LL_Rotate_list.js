function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function add(arr) {
    let newNode = new ListNode();
    let current = newNode;
    for (let x of arr) {
        current.next = new ListNode(x);
        current = current.next;
    }
    return newNode.next;
}
function display(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

var rotateRight = function (head, k) {
    // if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    tail.next = head;

    k = k % length;
    let SetpnewHead = length - k;
    let newTail = tail;
    while (SetpnewHead > 0) {
        newTail = newTail.next;
        SetpnewHead--;
    }
    let newHead = newTail.next;

    newTail.next = null;
    return newHead;







};




let arr = [0, 1, 2];

let insert = add(arr);
let ro = rotateRight(insert, 4)
let dis = new display(ro);