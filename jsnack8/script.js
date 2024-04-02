// Test
console.log('Hello World!');

// JSnack 8
// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Svolgimento
// - Chiedo all'utente un numero di 4 cifre
// - Con un ciclo for estraggo le singole cifre e le sommo in una variabile

const userN = prompt('Inserisci un numero di 4 cifre');

if (userN.length === 4) {
    let sum = 0;
    for (i = 0; i < userN.length; i++) {
    sum = sum + parseInt(userN[i]);
}
    console.log("La somma delle 4 cifre è: ", sum);
} else {
    alert('Attenzione: hai inserito un numero non valido')
}



