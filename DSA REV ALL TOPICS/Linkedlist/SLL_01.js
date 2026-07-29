class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    Insert_at_bigning(data) {
        let NewNode = new node(data);

        if (this.head === null) {
            this.head = NewNode;
            return;
        }

        NewNode.next = this.head;
        this.head = NewNode;
    }
    insert_at_end(data) {
        let NewNode = new node(data);
        if (this.head === null) {
            this.head = NewNode;
            return;
        }
        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = NewNode;
    }
    deletion(){
        if(this.head===null){
            
        }
    }
    display() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}


const SLLClass = new SLL();
// SLLClass.Insert_at_bigning(10);
// SLLClass.Insert_at_bigning(20);
// SLLClass.Insert_at_bigning(30);

SLLClass.insert_at_end(10);
SLLClass.insert_at_end(20);
SLLClass.insert_at_end(30);
SLLClass.display();