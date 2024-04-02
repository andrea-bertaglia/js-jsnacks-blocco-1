// Test
console.log('Hello World!');

// Snack 6
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

// Svolgimento
// - Chiedo all'utente di inserire il numero
// - Con un ciclo for ripetuto n volte in base a quanto scelto dall'utente, stampo il cubo di ciascun numero

const userN = parseInt(prompt('Inserisci il numero'));
console.log("Hai digitato: ", userN);

for (let i = 1; i <= userN; i++) {
    cube = (i * i * i);
    console.log(`Il cubo di ${i} è: ${cube}`);
}

