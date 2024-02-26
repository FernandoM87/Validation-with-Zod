"use strict";
{
    //1. Skapa en funktion som använder generiska typer. Funktionen ska ta in en array av vilken typ somhelst och returna arrayen i omvänd ordning.
    /* function reverseArray<T>(array: T[]): T[] {
        return array.reverse();
    }
    
    const originalArray = [1,2,3,4,5,6,7,8,9,10];
    const reversedArray = reverseArray(originalArray);
    console.log(reversedArray); */
    function relevantEvent(information) {
        return information;
    }
    const newInformation = [
        {
            "titel": "New consoles to the market",
            "body": "The new generation consoles is coming to this year and the people has began to reserve them in a crazy competition to obtain them before anyone else."
        }
    ];
    const newsReserved = relevantEvent(newInformation);
    console.log(newsReserved);
}
