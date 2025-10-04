let stackArr = [];
let top = -1
let fsize = 4;
function addAtTop(data) {
    if (top === -1) {
        top++;
        stackArr[top] = data;
    }
    else {
        if (stackArr.length === fsize) {
            console.log("Overflow")
        } else {
            top++;
            stackArr[top] = data;
        }
    }
}

function Peek() {
    if (top === -1) {
        console.log(`UnderFlow `);
    }
    return `peek = ${stackArr[top]}`;

}

function removeAtTop() {
    if (top === -1) {

        console.log("empty arr");
    } else {
        let val = stackArr[top]
        top--;
        return val;
    }
}

function sizeofStack() {
    console.log(stackArr.length);
}

function clearStack() {
    if (top === -1) {
        console.log("empty");

    }
    else {
        stackArr = [];
        top = -1;
        console.log("stack is cleard")

    }
}
function display() {
    if (top === -1) {
        console.log("empty");
    }
    else {
        let n = stackArr.length;
        while (n > 0) {
            console.log(`|${stackArr[n - 1]}|`);
            console.log("----");
            n--;

        }
    }

}
addAtTop(11);
addAtTop(12);
addAtTop(13);
addAtTop(14);
addAtTop(15);

display();
console.log(Peek());
console.log(removeAtTop());

display();


sizeofStack();

clearStack();

display();


