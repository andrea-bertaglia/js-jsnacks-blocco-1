// Test
console.log('Hello World!');

// JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// Svolgimento
// - Creo un array vuoto
// - Con un ciclo for chiedo per 6 volte all'utente di inserire un numero
// - Se il numero è dispari
//     inserisco il numero nell'array

let oddNums = [];

for (i = 0; i < 6; i++) {
    userNum = prompt(`Inserisci il ${i+1}° numero:`)
    console.log("Hai digitato:", userNum);

    if (userNum % 2 !== 0) {
        oddNums.push(userNum)
    }
}
console.log("I numeri dispari inseriti sono:", oddNums);