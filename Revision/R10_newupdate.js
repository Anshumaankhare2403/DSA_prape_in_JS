const data = 10;
console.log(data);

class node{
    constructor(data){
        this.data = data;
    }
    displaydata(){
        console.log(this.data);
    }
}

const newdata = new node("anshumaan khare");
newdata.displaydata();