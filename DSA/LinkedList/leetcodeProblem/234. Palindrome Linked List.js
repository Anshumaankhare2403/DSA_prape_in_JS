
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Step 1: Find middle (slow-fast pointer)
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;

    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    let first = head;
    let second = prev;

    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
};

// Create linked list: 1 -> 2 -> 2 -> 1
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // true