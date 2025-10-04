class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class stackLL {
    constructor() {
        this.head = null;
        this.size = 0;
        this.fsize = 5;

    }

    InsertData(data) {
        let newNode = new node(data);

        if (this.head === null) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        }
        else {

            if (this.size === this.fsize) {
                console.log("overFlow");
            } else {
                newNode.next = this.head;
                this.head = newNode;
                this.size++
            }
        }
    }
    peek() {
        if (this.head === null) {
            console.log("UnderFlow");
        }
        else {
            console.log(this.head.data);
        }
    }

    remove() {
        if (this.head === null) {
            console.log("UnderFlow");
            return InsertData(10);
        }
        else {
            let pop = this.head.data;
            this.head = this.head.next;
            this.size--;
            console.log(pop);
        }
    }

    sizeofStack() {
        console.log(this.size)
    }

    clearstack() {
        this.head = null;
        this.size = 0;
    }

    display() {
        let temp = this.head;
        if (this.head === null) {
            console.log("UnderFlow");
        }
        else {
            while (temp !== null) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }

}


const ll = new stackLL();
ll.InsertData(10);
ll.InsertData(20);
ll.InsertData(30);
ll.InsertData(40);
ll.InsertData(50);
ll.InsertData(60);
ll.display();
ll.peek();
ll.remove();
ll.display();

ll.sizeofStack();

ll.clearstack();
ll.display();
