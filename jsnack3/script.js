// Test
console.log('Hello World!');

// JSnack 3
// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Svolgimento
// - Chiedere tramite prompt 10 volte l'inserimento di un numero (uso array con ciclo for)
// - Dichiaro una variabile per estrarre i singoli valori e una di appoggio per la somma
// - Con un altro ciclo for sommo tutti i dati dell'array

const userNumbers = [];

for (i = 0; i <= 9; i++) {
    userNumbers[i] = prompt(`Inserisci il ${i+1}° numero`);
    console.log(userNumbers);
}

let num = 0;
let sum = 0;

for (i = 0; i < userNumbers.length; i++) {
    num = parseInt(userNumbers[i]); 
    sum = sum + num;
    console.log("somma parziale:", sum);
}

console.log("Il totale è:", sum);