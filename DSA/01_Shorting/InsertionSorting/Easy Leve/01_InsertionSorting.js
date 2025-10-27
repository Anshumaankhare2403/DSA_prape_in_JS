
// const arr = [5, 3, 4, 1, 2];
const arr = ["pear", "apple", "orange", "banana"]

for (let i = 1; i < arr.length; i++) {
    let key = arr[i];// this will insert the value first key = 3
    let j = i - 1;// then this will store the left side value which is 5

    while (j >= 0 && arr[j] > key) {// IN this while loop i gonna check the condition that j >=0 && arr[j]>key
        arr[j + 1] = arr[j];// swap the elements 
        j--;

    } S

    arr[j + 1] = key;// in this store value in  rigth place 

}

console.log(arr);