class l1 {
    constructor(Ldata) {
        this.Ldata = Ldata;
        this.next = null;
    }
}

class l2 {
    constructor(Ldata) {
        this.Ldata = Ldata;
        this.next = null;
    }
}


class ll {
    constructor() {
        this.head = null;
        this.headL2 = null;

    }


    insertionForL1(ldata) {
        let newNode = new l1(ldata);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;

        }
    }

    L1Arrayinstrion(arr) {
        for (let x of arr) {
            // console.log(x);
            this.insertionForL1(x)
        }
    }
    L2Arrayinstrion(arr) {
        for (let x of arr) {
            // console.log(x);
            this.insertionForL2(x)
        }
    }

    insertionForL2(ldata) {
        let newNode = new l1(ldata);
        if (this.headL2 === null) {
            this.headL2 = newNode;
        }
        else {
            newNode.next = this.headL2;
            this.headL2 = newNode;

        }
    }

    // displayL1() {
    //     if (this.head === null) {
    //         console.log("Error");
    //     }
    //     else {

    //         let temp = this.head;
    //         while (temp !== null) {

    //             console.log(temp.Ldata);
    //             temp = temp.next;
    //         }

    //     }
    // }
    // displayL2() {
    //     if (this.headL2 === null) {
    //         console.log("Error");
    //     }
    //     else {

    //         let temp = this.headL2;
    //         while (temp !== null) {

    //             temp = temp.next;

    //         }


    //     }
    // }

    sumOFL1AndL2() {
        // console.log(this.head.Ldata + this.headL2.Ldata);
        let list = [];
        let temp = this.head;
        let temp1 = this.headL2;
        let carry = 0;
        while (temp !== null || temp1 !== null || carry > 0) {
            let val1 = temp ? temp.Ldata : 0;
            let val2 = temp1 ? temp1.Ldata : 0;

            let sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10);
            list.push(sum % 10);
            temp = temp.next;
            temp1 = temp1.next;
        }
        console.log(list)
    }
}





let llimp = new ll()
let arr = [2, 4, 3];
let arr1 = [5, 6, 4];
// llimp.insertionForL1(arr);

// llimp.displayL1();

// llimp.insertionForL2(arr);
// llimp.displayL2();

llimp.L1Arrayinstrion(arr)
llimp.L2Arrayinstrion(arr1)
llimp.sumOFL1AndL2();

// llimp.displayL1();