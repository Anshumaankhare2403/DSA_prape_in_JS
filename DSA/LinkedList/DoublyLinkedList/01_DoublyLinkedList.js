class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }


}


class DLL {
    constructor() {
        this.head = null;
        this.tail = 0;
    }

    InsertAtStart(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    InsertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            console.log("List empty Add data :-");
            this.head = newNode;
            this.tail = newNode;
        }
        else {

            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
    }


    DeleteAtStart() {
        if (this.head === null) {
            console.log("List is Empty");
        }
        else {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        }
    }

    DeleteAtEnd() {
        if (this.head === null) {
            console.log("list Is empty")
        }
        else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    InsertAtLocation(index, data) {
        let newNode = new Node(data);
        if (this.head === null) {
            console.log("List empty");
        } else {
            let count = 0;
            let temp = this.head;
            while (temp !== null) {
                count++;
                temp = temp.next;
                if (count === index) {
                    break;
                }
            }
            temp.next = newNode;




        }

    }


    DisplayDLL() {
        if (this.head === null) {
            console.log("Sorry Linked List Emplty ");
        }
        else {
            let current = this.head;
            let result = ""
            while (current) {
                result += `Data:- ${current.data}\n`;
                current = current.next;

            }
            console.log(result);
        }
    }
    ReversDisplayDLL() {
        if (this.head === null) {
            console.log("Sorry DLL is  Empty")
        }
        else {
            let current = this.tail;
            let result = ""
            while (current !== null) {
                result += `Data:- ${current.data}\n`;
                current = current.prev;
            }

            console.log(result);
        }
    }

    SerarchData(data) {
        if (this.head === null) {
            console.log("list is empty");
        }
        else {
            let temp = this.head;
            while (temp.data !== data) {
                temp = temp.next;
            }
            console.log(`SearchData = ${temp.data}`)
        }
    }

}


let dll = new DLL();
dll.InsertAtStart(10);
dll.InsertAtEnd(20);
dll.InsertAtEnd(30);
dll.InsertAtEnd(40);

// dll.DeleteAtStart();
// dll.DeleteAtEnd();

// dll.DisplayDLL();
dll.ReversDisplayDLL();
// dll.SerarchData(20);
