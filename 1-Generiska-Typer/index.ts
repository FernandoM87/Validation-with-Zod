{
    
//1. Skapa en funktion som använder generiska typer. Funktionen ska ta in en array av vilken typ somhelst och returna arrayen i omvänd ordning.


function relevantEvent<Type>(information: Type[]): Type[] {
    return information;
}

const newInformation = [
    "New consoles to the market. The new generation consoles is coming to this year and the people has began to reserve them in a crazy competition to obtain them before anyone else."
]

const newsReserved = relevantEvent(newInformation);
console.log(newsReserved);


//2. Skapa en funktion som tar in två "key" och "value" som vardera är en generisk typ (inte samma!) och returnera objektek av properties "key" och "value".

function makePair<K, V>(key: K, value: V): { key: K, value: V } {
    return { key, value };
} 

const namePair = makePair("name","Sandra");
const agePair = makePair("age", "28");

console.log(namePair);
console.log(agePair);

//3. Skapa ett interfacce "Box" med en generisk typ T. Interfaces ska ha ett propery "item" av typen T. Skapa en funktion "unbox" som tar in interfacet Box och returnetar "item".

interface Box<T> {
    item: T;
}

function unbox<T>(box: Box <T>): T {
    return box.item;
}

const stringBox: Box<string> = { item: "Hello, Typescript!" };
console.log(unbox(stringBox));

}

