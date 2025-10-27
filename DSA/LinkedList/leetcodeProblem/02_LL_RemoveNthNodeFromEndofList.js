function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function add(arr) {
    let newNode = new ListNode(arr[0])
    let current = newNode;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return newNode;

}

function display(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.val);
        temp = temp.next;
    }
}

let removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;


    for (let i = 0; i <= n; i++) {
        first = first.next;
    }


    while (first !== null) {
        first = first.next;
        second = second.next;
    }


    second.next = second.next.next;

    return dummy.next;
};



let arr = [1, 2, 3, 4, 5];
let n = 2
let insert = new add(arr);


let rem = new removeNthFromEnd(insert, n)
let dis = new display(insert);


