let front = null;
let rear = null;

function Node(data) {
    this.data = data;
    this.next = null;
}

function enqueue(data) {
    let newNode = new Node(data);
    if (rear === null) {
        front = rear = newNode;
    } else {
        rear.next = newNode;
        rear = newNode;
    }
    console.log(`Enqueue done :- ${data}`);
}

function dequeue() {
    if (front === null) {
        console.log("Queue Underflow!");
        return;
    }
    console.log(`${front.data} removed from queue`);
    front = front.next;
    if (front === null) rear = null;
}

function isEmpty() {
    if (front === null) {
        console.log("Queue is Underflow!");
    } else {
        console.log("Queue is not Underflow!");
    }
}

function isFull() {
    console.log("Queue never overflow in linked list");
}

function Size() {
    let count = 0;
    let temp = front;
    while (temp !== null) {
        count++;
        temp = temp.next;
    }
    console.log("Queue Size :-", count);
}

function display() {
    if (front === null) {
        console.log("Queue is Underflow!");
        return;
    }
    let temp = front;
    let output = "";
    while (temp !== null) {
        output += temp.data + " ";
        temp = temp.next;
    }
    console.log(`Queue:-[${output.trim()}]`);
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);

display();
dequeue();
display();
isEmpty();
isFull();
Size();
