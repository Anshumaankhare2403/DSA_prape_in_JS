class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

   
    hash(key) {
        return key % this.size;
    }


    insert(key, value) {
        let index = this.hash(key);

        console.log(`\nInserting Key: ${key}, Value: ${value}`);
        console.log(`Home Index: ${index}`);

  
        while (this.table[index] !== null) {
            console.log(`Collision at index ${index}, probing next...`);
            index = (index + 1) % this.size;
        }

        this.table[index] = { key, value };
        console.log(`Inserted at index ${index}`);
    }

    search(key) {
        let index = this.hash(key);
        let start = index; 

        console.log(`\nSearching for Key: ${key}`);

        while (this.table[index] !== null) {
            if (this.table[index].key === key) {
                console.log(`Found at index ${index}`);
                return this.table[index].value;
            }
            index = (index + 1) % this.size;

            if (index === start) break; 
        }

        console.log(`Key ${key} not found`);
        return null;
    }

    display() {
        console.log("\nHash Table:");
        this.table.forEach((item, index) => {
            console.log(`${index}: ${item ? `{key: ${item.key}, value: ${item.value}}` : "empty"}`);
        });
    }
}




let ht = new HashTable(7);

ht.insert(10, "Apple");  
ht.insert(3, "Mango");    
ht.insert(17, "Banana");  

ht.display();

console.log("\nSearch Results:");
console.log("Search 10 →", ht.search(10));
console.log("Search 3 →", ht.search(3));
console.log("Search 17 →", ht.search(17));
console.log("Search 25 →", ht.search(25));
