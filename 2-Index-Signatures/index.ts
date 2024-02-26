{
 // Här skapar du interfacet
interface DataStore<T>{
    [key : string] : T;

}

function createDataStore<T>() {
    const store: DataStore<T> = {}; // Byt ut any till ovan definerade interface

    function addItem(key: string, item: T): void {
        store[key] = item;
    }

    function getItem(key: string): T | undefined {
        return store[key]; 
    }

    return { addItem, getItem}; // Return the functions
}

const stringStore = createDataStore<string>();
stringStore.addItem('greeting', 'Hello, world!');
console.log(stringStore.getItem('greeting')); 

const numberStore = createDataStore<number>();
numberStore.addItem('age', 30);
console.log(numberStore.getItem('age'));   
}