const readline = require("readline");
class Node {
    constructor(usn, name, marks) {
        this.student_USN = usn;
        this.name = name;
        this.cgpa = marks;
        this.next = null;
        this.prev = null;
    }
}

class EmployeDLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    InsertionAtStart(usn, name, marks) {
        let newNode = new Node(usn, name, marks);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    InsertionAtEnd(usn, name, marks) {
        let newNode = new Node(usn, name, marks);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;

        }

    }

    InsertionByUSN(id, usn, name, marks) {
        let newNode = new Node(usn, name, marks);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            while (temp !== null && temp.student_USN !== id) {
                temp = temp.next;
            }
            newNode.next = temp.next;
            newNode.prev = temp;
            if (temp.next !== null) {
                temp.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            temp.next = newNode;
        }
    }

    DisplayEmployeData_Backward() {
        if (this.head === null) {
            console.log("DB is Empty");
        } else {
            let current = this.tail;
            while (current !== null) {
                console.log(
                    `usn:- ${current.student_USN}\nName:- ${current.name}\nMarks:- ${current.cgpa}\n----------------------`
                );
                current = current.prev;
            }
        }
    }
    DisplayEmployeData_Forward() {
        if (this.head === null) {
            console.log("DB is Empty");
        } else {
            let current = this.head;
            while (current) {
                console.log(
                    `usn:- ${current.student_USN}\nName:- ${current.name}\nMarks:- ${current.cgpa}\n\n----------------------`
                );
                current = current.next;
            }
        }
    }
    SearchByCGPA(cgpa) {
        if (this.head === null) {
            console.log("DB is empty");
        }
        else {
            let current = this.head;
            while (current !== null) {
                if (current.cgpa === cgpa) {
                    console.log(
                        `usn:- ${current.student_USN}\nName:- ${current.name}\nMarks:- ${current.cgpa}\n\n----------------------`
                    );
                }
                current = current.next;
            }
        }

    }
}

let EDll = new EmployeDLL();
EDll.InsertionAtStart(12, "Anuj Khare", 10);
EDll.InsertionAtStart(13, "Ravi", 9);
EDll.DisplayEmployeData_Forward();

EDll.InsertionAtEnd(14, "Anshumaankhare", 10);
EDll.InsertionAtEnd(15, "Anshu", 8);

EDll.InsertionByUSN(14, 16, "ak24", 5);
EDll.DisplayEmployeData_Backward();
EDll.SearchByCGPA(8);