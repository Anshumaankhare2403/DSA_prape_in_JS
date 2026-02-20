const readline = require("readline");

class Node {
    constructor(id, name, age, salary, designation) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.idIncrement = 1;
    }

    AddDataFromStart(name, age, salary, designation) {
        const newNode = new Node(this.idIncrement++, name, age, salary, designation);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    AddDataFromEnd(name, age, salary, designation) {
        const newNode = new Node(this.idIncrement++, name, age, salary, designation);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.size++;
    }

    AddDataFromMiddle(name, age, salary, designation) {
        const newNode = new Node(this.idIncrement++, name, age, salary, designation);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let mid = Math.floor(this.size / 2);

            let temp = this.head;
            for (let i = 0; i < mid - 1; i++) {
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
        }
        this.size++;
    }



    DelDataFromStart() {
        if (this.head === null) {
            console.log("Linked list is empty.");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    DelDataFromEnd() {
        if (this.head === null) {
            console.log("Linked list is empty.");
            return;
        }
        if (this.head.next === null) {
            this.head = null;
        } else {
            let temp = this.head;
            while (temp.next.next !== null) {
                temp = temp.next;
            }
            temp.next = null;
        }
        this.size--;
    }
    DelDataFromMiddle() {
        if (this.head === null) {
            console.log("Linked list is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
        } else {
            let mid = Math.floor(this.size / 2);
            let temp = this.head;

            for (let i = 0; i < mid - 1; i++) {
                temp = temp.next;
            }

            temp.next = temp.next.next;
        }
        this.size--;
    }

    DelDataById(id) {
        if (this.head === null) {
            return `List is empty`;
        }

        if (this.head.id === id) {
            this.head = this.head.next;
            this.size--;
            return `ID:${id} deleted successfully`;
        }

        let temp = this.head;
        while (temp.next !== null && temp.next.id !== id) {
            temp = temp.next;
        }

        if (temp.next === null) {
            return `ID:${id} not found`;
        }

        temp.next = temp.next.next;
        this.size--;
        return `ID:${id} deleted successfully`;
    }

    PrintLinkedList() {
        if (this.head === null) {
            console.log("Linked list is empty.");
            return;
        }
        let current = this.head;
        let result = "";
        while (current) {
            result += `ID: ${current.id}\nName: ${current.name}\nAge: ${current.age}\nSalary: ${current.salary}\nDesignation: ${current.designation}\n--------------------\n`;
            current = current.next;
        }
        console.log(result + "null");
    }

    DataSearchingInLinkedList(id, name) {
        let current = this.head;
        while (current !== null) {
            if ((id && id === current.id) || (name && name === current.name)) {
                console.log(`Found:\n ID: ${current.id},\n Name: ${current.name},\n Age: ${current.age},\n Salary: ${current.salary},\n Designation: ${current.designation}\n-------------\n`);
                return;
            }
            current = current.next;
        }
        console.log("Data not found in the list");
    }

    SerachhigthsSalaryOfEmploy() {
        if (this.head === null) {
            console.log("Empty DataBases");
            return;
        }

        let current = this.head;
        let maxSalary = this.head;
        while (current !== null) {
            if (current.salary > maxSalary.salary) {
                maxSalary = current;
            }
            current = current.next;
        }
        console.log(`Name:${maxSalary.name}\nSalary:${maxSalary.salary}`);
    }


}




const list = new LinkedList();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n===== Linked List Menu =====");
    console.log("1. Add data at start");
    console.log("2. Add data at end");
    console.log("3. Delete from start");
    console.log("4. Delete from end");
    console.log("6. Search by name");
    console.log("7. Insert at middle");
    console.log("8. Delete from middle");
    console.log("9. Search Higths Salary ");
    console.log("10. Deletion by ID (not implemented in menu)");
    console.log("0. Exit");
    rl.question("Enter your choice: ", handleChoice);
}


function handleChoice(choice) {
    switch (choice) {
        case "1":
            rl.question("Enter name age salary designation (space separated): ", (input) => {
                const [name, age, salary, designation] = input.split(" ");
                list.AddDataFromStart(name, parseInt(age), parseInt(salary), designation);
                list.PrintLinkedList();
                showMenu();
            });
            break;

        case "2":
            rl.question("Enter name age salary designation (space separated): ", (input) => {
                const [name, age, salary, designation] = input.split(" ");
                list.AddDataFromEnd(name, parseInt(age), parseInt(salary), designation);
                list.PrintLinkedList();
                showMenu();
            });
            break;

        case "3":
            list.DelDataFromStart();
            list.PrintLinkedList();
            showMenu();
            break;

        case "4":
            list.DelDataFromEnd();
            list.PrintLinkedList();
            showMenu();
            break;


        case "6":
            rl.question("Search by (1) ID or (2) Name? Enter choice: ", (searchChoice) => {
                if (searchChoice === "1") {
                    rl.question("Enter ID to search: ", (id) => {
                        list.DataSearchingInLinkedList(parseInt(id), null);
                        list.PrintLinkedList();
                        showMenu();
                    });
                } else if (searchChoice === "2") {
                    rl.question("Enter Name to search: ", (name) => {
                        list.DataSearchingInLinkedList(null, name);
                        list.PrintLinkedList();
                        showMenu();
                    });
                } else {
                    console.log("Invalid search choice.");
                    list.PrintLinkedList();
                    showMenu();
                }
            });
            break;

        case "7":
            rl.question("Enter name age salary designation (space separated): ", (input) => {
                const [name, age, salary, designation] = input.split(" ");
                list.AddDataFromMiddle(name, parseInt(age), parseInt(salary), designation);
                list.PrintLinkedList();
                showMenu();
            });
            break;

        case "8":
            list.DelDataFromMiddle();
            list.PrintLinkedList();
            showMenu();
            break;
        case "9":
            list.SerachhigthsSalaryOfEmploy();
            list.PrintLinkedList();
            showMenu();
            break;
        case "10":
            rl.question("Enter ID to delete: ", (id) => {
                const message = list.DelDataById(parseInt(id));
                console.log(message);
                showMenu();
            });
            break;
        case "0":
            console.log("Exiting program...");
            rl.close();
            break;

        default:
            console.log("Invalid choice. Try again.");
            showMenu();
            break;
    }
}

// start program
showMenu();
