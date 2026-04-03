class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class LL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertdata(data) {
        const nn = new node(data);
        if (this.head === null) {
            this.head = nn;
            this.size++;
        }

        this.head = nn;
        nn.next = this.head;
        this.size++;
    }

    display() {
        if (this.head === null) {
            console.log("empty list");
            return;
        }

        let temp = this.head;
        while (temp.next !== null) {
            console.log(temp.data);
            temp = temp.next;
        }


    }
}


const l = new LL();
l.insertdata(10);
l.insertdata(20);
l.insertdata(34);
l.insertdata(54);

l.display();
