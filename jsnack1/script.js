// Test
console.log("Hello World");

// ESERCIZIO 1:
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num1 = parseInt(prompt('Inserisci il primo numero'));
const num2 = parseInt(prompt('Inserisci il secondo numero'));

if (num1 > num2) {
    console.log("il maggiore è", num1);
} else if (num1 === num2) {
    console.log("Sono uguali");
} else {
    console.log("il maggiore è", num2);
}

