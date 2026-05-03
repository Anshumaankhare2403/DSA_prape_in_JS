let arr = [];
let top = -1

const push=(data)=>{
    if(top===-1){
        top++;
        arr[top] = data;
        console.log("top is -1 ",arr[top]);
    }
    else{
        top++;
        arr[top] = data;
        console.log("top value add",arr[top])
    }
}

push(1)
push(2)
push(3)


top++
arr.push(10);
top++
arr.push(20);
top++
arr.push(30);

console.log(arr);

top--;
arr.pop();

const pop = ()=>{
    if(top===-1){
        console.log("underflow ")
    }
    arr.length--;
    top--;
      
}
pop();
pop();


console.log(arr);


const display = (arr)=>{
    if(top===-1){
        console.log("underflow");
    }
    arr.forEach(element => {
        console.log("Stack Value = ",element);
    });
}

display(arr);

const size = (arr)=>{
    if(top===-1){
        console.log("underflow");
    }
    console.log("size = ",arr.length);
}

size(arr);


const updata = (index,value)=>{
    if(top===-1){
        console.log("underflow");
    }
    arr.forEach((e,i)=>{
        if(index===arr[i]){
            console.log("found = ",arr[i],e);
            arr[i] = value;
        }
        
    })

}

updata(1,30);
display(arr);


