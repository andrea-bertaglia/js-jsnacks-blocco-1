// Test
console.log('Hello World!');

// JSnack 7
// Stampa le potenze di 2 fino a 1000.

// Svolgimento
// - Creo una variabile per il calcolo
// - Con un ciclo for stampo tutte le potenze di fino a 1000

let calc = 0;

for (i = 0; calc < 1000; i++) {
    calc = Math.pow(2, i)

    if (calc > 1000) {
        break;
    } else {
        console.log(`2^${i} = ${calc}`);
    }
}