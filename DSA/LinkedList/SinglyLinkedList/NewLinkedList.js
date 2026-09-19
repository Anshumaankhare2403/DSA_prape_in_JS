class Node {
     constructor(data) {
          this.data = data;
          this.next = null;
     }
}

class list {
     constructor() {
          this.size = 0;
          this.head = null;
     }

     addData(data) {
          const nn = new Node(data);
          if (this.head === null) {

               console.log("Empty Array and Added the element ");
               this.head = nn;
               this.size++;
          }
          else {
               nn.next = this.head;
               this.head = nn;
               this.size++;
          }
     }

     addarrinlist(data){
          const nn  = new Node(data);
          let arr = data;
          
          for(let x in arr){
               this.addData(arr[x]); 
          }
     }

     adddataEnd(data){
          const nn= new Node(data);
          if(this.head === null){
               console.log("list is empty and add at end");
               this.head = nn;
               this.size++;
          }
          else{
               let temp=this.head;

               while (temp.next!==null) {
                    temp = temp.next ;
               }
               nn.next = temp.next;
               temp.next = nn;         

          }
     }

     display() {
          if (this.head === null) {
               console.log("list is empty");
          }
          else {
               let temp = this.head;
               while (temp !== null) {
                    console.log(temp.data);
                    temp = temp.next;
               }
          }
     }
}


// let l = new list();
// l.adddataEnd(10);
// l.adddataEnd(20);
// l.adddataEnd(30);
// l.adddataEnd(40);
// l.display();

//  how to add array inside the Linked list 
const arr = [1,2,3,4,5];
let l = new list();
// l.adddataEnd(arr);
l.addarrinlist(arr);
l.display();