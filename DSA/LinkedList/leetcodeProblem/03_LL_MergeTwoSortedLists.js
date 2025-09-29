function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}


var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;


    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;

        }
        else {
            current.next = list2;
            list2 = list2.next;
        }


        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;

    }
    if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next

};

let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);

let merged = mergeTwoLists(list1, list2);
let list = []
// Print merged list
while (merged) {
    list.push(merged.val);
    merged = merged.next;
}

console.log(list);