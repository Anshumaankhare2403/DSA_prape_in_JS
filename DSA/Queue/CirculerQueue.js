class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }


    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is Full! Cannot insert:", element);
            return;
        }

        if (this.front === -1) this.front = 0;

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
        console.log(`Inserted: ${element}`);
    }


    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty! Cannot dequeue.");
            return null;
        }

        let removed = this.queue[this.front];

        if (this.front === this.rear) {

            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        console.log(`Deleted: ${removed}`);
        return removed;
    }


    peek() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return null;
        }
        return this.queue[this.front];
    }

    isFull() {
        return ((this.rear + 1) % this.size) === this.front;
    }

    isEmpty() {
        return this.front === -1;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return;
        }

        let result = "";
        let i = this.front;

        while (true) {
            result += this.queue[i] + " ";
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }

        console.log("Circular Queue:", `[ ${result}]`);
    }
}



const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);

cq.display();

cq.dequeue();
cq.dequeue();

cq.display();

cq.enqueue(60);
cq.enqueue(70);

cq.display();
console.log("Front Element:", cq.peek());
