"use strict";
{
    function createDataStore() {
        const store = {}; // Byt ut any till ovan definerade interface
        function addItem(key, item) {
            store[key] = item;
        }
        function getItem(key) {
            return store[key];
        }
        return { addItem, getItem }; // Return the functions
    }
    const stringStore = createDataStore();
    stringStore.addItem('greeting', 'Hello, world!');
    console.log(stringStore.getItem('greeting'));
    const numberStore = createDataStore();
    numberStore.addItem('age', 30);
    console.log(numberStore.getItem('age'));
}
