let MAX = 5;
let arr = new Array(MAX);
let front = -1;
let rear = -1;

function enqueue(data) {
    if (rear === MAX - 1) {
        console.log("Queue overflow!");
        return;
    }
    if (front === -1) {
        front = 0;
    }
    rear++;
    arr[rear] = data;
    console.log(`Enqueue done :- ${data}`);
}

function dequeue() {
    if (front === -1 || front > rear) {
        console.log("Queue is Underflow!")
        return;
    }
    console.log(`${arr[front]} removed from queue`);

    front++;
}

function isEmpty() {
    if (front === -1 || front > rear) {
        console.log("Queue is Underflow!");
        return;
    } else {
        console.log("Queue is not Underflow!");
    }
}

function isFull() {
    if (rear === MAX - 1) {
        console.log("Queue overflow!");
        return;
    } else {
        console.log("Queue is not overflow!");
        return;
    }
}

function Size() {
    let count = 1;
    for (let i = front; i <= rear; i++) {
        count++;
    }

    console.log("Queue Size :-", count)
}
function display() {
    if (front === -1 || front > rear) {
        console.log("Queue is Underflow!");
        return;
    }
    let output = "";
    for (let i = front; i <= rear; i++) {
        output += arr[i] + " ";
    }
    console.log(`Queue:-[${output.trim()}]`);
}

enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)

display();

dequeue()
display();

isEmpty();

isFull();

Size();