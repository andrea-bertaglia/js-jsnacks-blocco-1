// Test
console.log("Hello World");

// ESERCIZIO 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt("Inserisci la prima parola");
const word2 = prompt("Inserisci la seconda parola");
console.log(word1.length);
console.log(word2.length);


if (word1.length > word2.length) {
    console.log("la più lunga è:", word2, "la più corta è:", word1);
} else if (word1.length === word2.length) {
    console.log("le parole sono della stessa lunghezza", word1, word2);
} else {
    console.log("la più lunga è:", word1, "la più corta è:", word2);
}