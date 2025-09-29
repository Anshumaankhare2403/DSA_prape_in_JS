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
function reverseList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        arr1.push(current.val);
        current = current.next;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] < arr1[j]) {
                let temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;

            }
        }
    }

}
let arr = [1, 2, 3, 4];
let arr1 = [];
let adddata = add(arr);
// let dis = display(adddata);
let rev = reverseList(adddata);
console.log(arr1)
