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

function Duple(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val !== current.next.val) {
            console.log(current.val);
        }

        current = current.next

    }

    if (current !== null) console.log(current.val)

}

let arr = [1, 1, 2, 3, 4, 4];

let LLAdd = new add(arr);


let dup = new Duple(LLAdd);