// Test
console.log('Hello World!');

// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.

// Svolgimento
// - Creo l'array degli invitati
// - Creo una variabile flag
// - Chiedo all'utente di inserire il proprio nome
// - Tramite un ciclo for scorro tutti gli elementi per verificare se c'è il nominativo inserito dall'utente

const guests = ["Pippo", "Paperino", "Pluto"];
let flag = false;

const userName = prompt('Inserisci il tuo nome');

for (i = 0; i < userName.length; i++) {
    if (userName === guests[i]) {
        flag = true;
    }
}

if (flag === true) {
    console.log('Complimenti, puoi partecipare alla festa del grande Gatsby!');
} else {
    console.log('Mi dispiace, non sei invitato');
}