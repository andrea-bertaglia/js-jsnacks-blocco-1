// Test
console.log('Hello World!');

// JSnack 9
// Calcola la somma e la media dei primi 10 numeri.

// Svolgimento
// - Inizializzo le variabili somma e media
// - Con un ciclo for calcolo la somma 
// - Calcolo la media

let sum = 0;
let average = 0;

for (i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log(`${i}a somma: ${sum}`);
}

console.log(`La somma dei primi 10 numeri è: ${sum}`);

average = sum / 10;
console.log(`La media dei primi 10 numeri è: ${average}`);
